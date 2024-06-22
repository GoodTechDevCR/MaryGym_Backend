import {MySqlConnection} from "../../database/DBConnection.js";

export const  consultEjercicio = async (req, res) => {
    const ejercicioId = req.params.id || 0;
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = ejercicioId ? 'CALL EjercicioConsult(?)' : 'CALL EjercicioConsult(NULL)';
        const params = ejercicioId ? [ejercicioId] : [];
        const [rows] = await connection.execute(query, params);
        res.json(rows);
    } catch (error) {
        console.error('Error al consultar el ejercicio:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
}


