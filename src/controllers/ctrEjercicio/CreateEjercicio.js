import { MySqlConnection } from "../../database/DBConnection.js";

// Controlador para crear un ejercicio
export const createEjercicio = async (req, res) => {
    const { nombreEjercicio, categoriaId } = req.body;
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = 'CALL EjercicioCreate(?, ?)';
        const params = [nombreEjercicio, categoriaId];
        await connection.execute(query, params);
        res.status(201).send('Ejercicio creado exitosamente');
    } catch (error) {
        console.error('Error al crear el ejercicio:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
};
