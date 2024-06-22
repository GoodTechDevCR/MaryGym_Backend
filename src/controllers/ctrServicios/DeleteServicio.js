import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para eliminar servicio
export const deleteServicio = async (req, res) => {
    const { id } = req.params;
    const sql = 'CALL ServicioDelete(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id]);
        res.send('Servicio eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
