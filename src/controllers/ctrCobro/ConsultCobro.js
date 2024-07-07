import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para consultar un cobro
export const consultCobro = async (req, res) => {
    const { id } = req.params;
    const sql = 'CALL CobroConsult(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id || 0]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


// Controlador para consultar la fecha de ultimo pago segun el id de un usuario
export const consultCobroFechaById = async (req, res) => {
    const { id } = req.params;
    const sql = 'call cobroconsultabyusuario(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id || 0]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};