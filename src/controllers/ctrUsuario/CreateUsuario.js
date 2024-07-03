import { MySqlConnection } from '../../database/DBConnection.js';
import { EnvioCorreo } from "../../services/EmailSender.js";

// Controlador para Crear usuario
export const createUsuario = async (req, res) => {
    const { Nombre, Apellido, Password, Telefono, Correo, Estado, FechaNacimiento } = req.body;
    console.log("holaaa");
    const sql = 'CALL UsuarioCreate(?, ?, ?, ?, ?, ?, ?, @OutResultCode)';

    try {
        const [result] = await MySqlConnection.execute(sql, [Nombre, Apellido, Password, Telefono, Correo, Estado, FechaNacimiento]);
        // Obtener el resultado del procedimiento almacenado
        const [rows] = await MySqlConnection.query('SELECT @OutResultCode AS result_code');

        // Obtener el resultado del código de resultado
        const resultCode = rows[0].result_code;
        console.log("Resultado: ", resultCode);

        // Manejar el resultado y enviar la respuesta correspondiente
        switch (resultCode) {
            case 1:
                res.status(200).json({ alert: 'success', message: 'Usuario creado exitosamente' });
                res.send('Usuario creado');
                EnvioCorreo(Correo, Nombre, Apellido).catch(console.error);
                break;
            case 508:
                res.status(400).json({ alert: 'error', message: 'Ya existe un usuario registrado con ese correo' });
                break;
            default:
                res.status(500).json({ alert: 'error', message: 'Error desconocido' });
                break;
        }
    } catch (err) {
        res.status(500).json({ alert: 'error', message: 'Error desconocido' });
    }
};