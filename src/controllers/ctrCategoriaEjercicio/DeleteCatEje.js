import { MySqlConnection } from "../../database/DBConnection.js";

export const deleteCategoriaEjercicio = async (req, res) => {
    const ejercicioId = req.params.id;
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = 'CALL CategoriaEjercicioDelete(?)';
        const params = [ejercicioId];
        await connection.execute(query, params);
        res.status(201).send('Categoria de Ejercicio borrado exitosamente');
    } catch (error) {
        console.error('Error al eliminar el ejercicio:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
};
