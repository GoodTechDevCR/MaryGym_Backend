import { MySqlConnection } from "../../database/DBConnection.js";

// Controlador para crear un ejercicio
export const createCategoriaEjercicio = async (req, res) => {
    const { NombreCatEje } = req.body;
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = 'CALL CategoriaEjercicioCreate(?)';
        const params = [NombreCatEje];
        await connection.execute(query, params);
        res.status(201).send('Categoria de Ejercicio creado exitosamente');
    } catch (error) {
        console.error('Error al crear el ejercicio:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
};
