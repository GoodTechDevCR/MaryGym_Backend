import {MySqlConnection} from "../../database/DBConnection.js";

export const  consultEjercicioPorCategoria = async (req, res) => {
    const catId = req.params.id || 0;
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = catId ? 'CALL EjercicioConsultByCat(?)' : 'CALL EjercicioConsultByCat(NULL)';
        const params = catId ? [catId] : [];
        const [rows] = await connection.execute(query, params);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al consultar el ejercicio por categoría:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
}

