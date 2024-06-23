import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para crear un pago
export const createPago = async (req, res) => {
    const { IdUsuario, Monto, FechaPago, IdTipoTran } = req.body;
    const sql = 'CALL PagoCreate(?, ?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, Monto, FechaPago, IdTipoTran]);
        res.send('Pago creado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
