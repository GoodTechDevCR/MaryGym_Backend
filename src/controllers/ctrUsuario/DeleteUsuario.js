import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para Eliminar usuario
export const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const sql = 'CALL UsuarioDelete(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id]);
        res.send('Usuario eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
