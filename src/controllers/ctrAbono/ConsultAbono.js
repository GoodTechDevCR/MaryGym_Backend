import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para consultar abonos
export const consultAbonos = async (req, res) => {
    const { IdUsuario } = req.params;
    const sql = 'CALL ConsultarAbonos(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario || 0]);
        res.json(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};