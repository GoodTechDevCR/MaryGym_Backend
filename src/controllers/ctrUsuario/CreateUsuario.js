import { MySqlConnection } from '../../database/DBConnection.js';
import {EnvioCorreo} from "../../services/EmailSender.js"

// Controlador para Crear usuario
export const createUsuario = async (req, res) => {
    const { Nombre, Apellido, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento } = req.body;
    const sql = 'CALL UsuarioCreate(?, ?, ?, ?, ?, ?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [Nombre, Apellido, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento]);
        res.send('Usuario creado');
        EnvioCorreo(Correo, Nombre, Apellido).catch(console.error);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
