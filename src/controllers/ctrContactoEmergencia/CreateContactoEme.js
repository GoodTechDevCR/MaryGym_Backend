import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para crear contactos de emergencia
export const createContactoEme = async (req, res) => {
    const contactos = req.body;  // Esperamos un array de contactos

    // El SQL de llamada al procedimiento almacenado
    const sql = 'CALL ContactoEmergenciaCreate(?, ?, ?, ?)';

    let connection;  // Declarar la conexión fuera del bloque try

    try {
        // Crear una conexión de transacción
        connection = await MySqlConnection.getConnection();
        await connection.beginTransaction();

        for (const contacto of contactos) {
            const { IdUsuario, Nombre, NumeroTelefono, Relacion } = contacto;
            await connection.execute(sql, [IdUsuario, Nombre, NumeroTelefono, Relacion]);
        }

        await connection.commit();
        connection.release();  // Liberar la conexión después de la transacción

        res.send('Contactos de emergencia creados');
    } catch (err) {
        if (connection) {
            await connection.rollback();
            connection.release();
        }
        res.status(500).send(err.message);
    }
};


// Controlador para crear un pago
export const createContactoEmeUnico= async (req, res) => {
    const { IdUsuario, Nombre, NumeroTelefono, Relacion } = req.body;
    const sql = 'CALL ContactoEmergenciaCreate(?, ?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, Nombre, NumeroTelefono, Relacion]);
        res.send('Contacto emergencia creado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
