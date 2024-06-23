import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para crear un cobro
export const createCobro = async (req, res) => {
    const { IdServicio, IdUsuario, MontoCobro, FechaInicio, FechaFinal } = req.body;
    const sql = 'CALL CobroCreate(?, ?, ?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdServicio, IdUsuario, MontoCobro, FechaInicio, FechaFinal]);
        res.send('Cobro creado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
