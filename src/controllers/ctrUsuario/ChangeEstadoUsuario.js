import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para Cambiar estado de usuario
export const ChangeEstadoUsuario = async (req, res) => {
    const { IdUsuario, Estado } = req.body;
    const sql = 'CALL UsuarioChangeEstado(?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, Estado]);
        res.send('Estado del usuario actualizado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
