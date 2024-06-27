import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para crear o actualizar un cobro y registrar un pago
export const createCobroYPago = async (req, res) => {
    const { IdUsuario, Monto, FechaPago, IdTipoTran } = req.body;
    const sql = 'CALL CrearOActualizarCobro(?, ?, ?, ?)';

    // Outputs en la consola para ver los datos recibidos
    console.log('Datos recibidos en el JSON:');
    console.log('IdUsuario:', IdUsuario);
    console.log('Monto:', Monto);
    console.log('FechaPago:', FechaPago);
    console.log('IdTipoTran:', IdTipoTran);
    
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, Monto, FechaPago, IdTipoTran]);
        res.send('Cobro y pago creados/actualizados exitosamente');
    } catch (err) {
        console.error('Error en createCobroYPago:', err);
        res.status(500).send(err.message);
    }
};
