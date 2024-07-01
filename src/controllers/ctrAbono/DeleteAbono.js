import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para eliminar un abono
export const deleteAbono = async (req, res) => {
    const { IdAbono } = req.params;
    const sql = 'CALL AbonoEliminar(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdAbono]);
        res.send('Abono eliminado exitosamente');
    } catch (err) {
        res.status(500).send(err.message);
    }
};