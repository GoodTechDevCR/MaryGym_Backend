import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para crear un abono
export const createAbono = async (req, res) => {
    const { IdUsuario, FechaAbono, MontoAbono } = req.body;
    const sql = 'CALL AbonoCrear(?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, FechaAbono, MontoAbono]);
        res.send('Abono creado exitosamente');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
