import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para eliminar un cobro
export const deleteCobro = async (req, res) => {
    const { id } = req.params;
    const sql = 'CALL CobroDelete(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id]);
        res.send('Cobro eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
