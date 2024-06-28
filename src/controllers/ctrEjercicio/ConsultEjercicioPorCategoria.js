import { MySqlConnection } from "../../database/DBConnection.js";

export const consultEjercicioPorCategoria = async (req, res) => {
    const catId = req.params.id || 0;
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = 'CALL EjercicioConsultByCat(?)';
        const [rows] = await connection.execute(query, [catId]);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al consultar el ejercicio por categoría:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
};
