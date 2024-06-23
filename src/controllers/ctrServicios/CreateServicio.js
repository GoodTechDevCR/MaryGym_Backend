import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para Crear servicio
export const createServicio = async (req, res) => {
    const { NombreServicio, PrecioServicio } = req.body;
    const sql = 'CALL ServicioCreate(?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [NombreServicio, PrecioServicio]);
        res.send('Servicio creado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
