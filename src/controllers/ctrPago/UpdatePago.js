import { MySqlConnection } from "../../database/DBConnection.js";

export const updatePago = async (req, res) => {
    const { idRegistro, nombreColumna, nuevoValor } = req.body;
    const nombreTabla = 'Pago'; // Dejar esto fijo y modificarlo según sea necesario
    let connection;

    try {
        connection = await MySqlConnection.getConnection();
        const query = 'CALL UpdateAnything(?, ?, ?, ?)';
        const params = [nombreTabla, idRegistro, nombreColumna, nuevoValor];
        await connection.execute(query, params);
        res.status(200).send('Registro actualizado exitosamente');
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        res.status(500).send('Error en el servidor');
    } finally {
        if (connection) connection.release();
    }
};
