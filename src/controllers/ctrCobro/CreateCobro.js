import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para crear o actualizar un cobro y registrar un pago
export const createCobroYPago = async (req, res) => {
    const { IdUsuario, Monto, FechaInicio, FechaPago, IdTipoTran, DiasAdicionales, FechaFinalEspecial } = req.body;
    const sql = 'CALL CrearOActualizarCobro(?, ?, ?, ?, ?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, Monto, FechaInicio, FechaPago, IdTipoTran, DiasAdicionales, FechaFinalEspecial]);
        res.json({ success: true, message: 'Cobro y pago creados/actualizados exitosamente' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
