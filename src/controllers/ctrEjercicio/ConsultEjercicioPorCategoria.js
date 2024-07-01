import {MySqlConnection} from "../../database/DBConnection.js";

export const consultEjercicioPorCategoria = async (req, res) => {
    const { id } = req.params;
    const sql = 'CALL EjercicioConsultByCat(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id || 0]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

