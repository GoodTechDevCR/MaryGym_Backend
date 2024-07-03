import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para consultar un servicio
export const createRutinaXUsuario = async (req, res) => {
    const { idUsuario, idRutina, Json } = req.params;
    const sql = 'CALL InsertarRutinaXUsuario(?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [idUsuario, idRutina, Json]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
