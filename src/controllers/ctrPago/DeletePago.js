import { MySqlConnection } from "../../database/DBConnection.js";

export const deletePago = async (req, res) => {
    const ejercicioId = req.params.id;
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = 'CALL PagoDelete(?)';
        const params = [ejercicioId];
        await connection.execute(query, params);
        res.status(201).send('Pago borrado exitosamente');
    } catch (error) {
        console.error('Pago al eliminar el ejercicio:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
};
