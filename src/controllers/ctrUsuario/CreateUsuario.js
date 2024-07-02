import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para Crear usuario
export const createUsuario = async (req, res) => {
    const { Nombre, Apellido, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento } = req.body;

    // Verificar que todos los campos requeridos estén presentes y no estén vacíos
    if (!Nombre || !Apellido || !Password || !Telefono || !Correo || !Saldo || !Estado || !FechaNacimiento) {
        return res.status(400).json({ alert: 'error', message: 'Todos los campos son requeridos' });
    }

    try {
        const sql = 'CALL UsuarioCreate(?, ?, ?, ?, ?, ?, ?, ?, @OutResultCode)';
        const params = [Nombre, Apellido, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento];

        const [result] = await MySqlConnection.execute(sql, params);

        // Obtener el resultado del procedimiento almacenado
        const [rows] = await MySqlConnection.query('SELECT @OutResultCode AS result_code');

        // Obtener el resultado del código de resultado
        const resultCode = rows[0].result_code;
        console.log("Resultado: ", resultCode);

        // Manejar el resultado y enviar la respuesta correspondiente
        switch (resultCode) {
            case 1:
                res.status(200).json({ alert: 'success', message: 'Usuario creado exitosamente' });
                break;
            case 508:
                res.status(400).json({ alert: 'error', message: 'Ya existe un usuario registrado con ese correo' });
                break;
            default:
                res.status(500).json({ alert: 'error', message: 'Error desconocido' });
                break;
        }
    } catch (err) {
        console.error('Error al crear el usuario:', err);
        res.status(500).json({ alert: 'error', message: 'Error en el servidor' });
    }
};
