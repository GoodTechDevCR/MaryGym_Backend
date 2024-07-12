import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para consultar un servicio
export const createRutinaXUsuario = async (req, res) => {
    const { IdUsuario, Json } = req.body;
    const sql = 'CALL InsertarRutinaXUsuario(?, ?)';
    
    // Stringify the JSON object
    const jsonString = JSON.stringify(Json);
    
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, jsonString]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
