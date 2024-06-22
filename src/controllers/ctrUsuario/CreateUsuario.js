import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para Crear usuario
export const createUsuario = async (req, res) => {
    const { Nombre, Apellido, NombreUsuario, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento } = req.body;
    const sql = 'CALL UsuarioCreate(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [Nombre, Apellido, NombreUsuario, Password, Telefono, Correo, Saldo, Estado, FechaNacimiento]);
        res.send('Usuario creado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
