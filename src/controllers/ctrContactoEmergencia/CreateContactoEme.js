import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para crear un cobro
export const createContactoEme = async (req, res) => {
    const { IdUsuario, Nombre, NumeroTelefono, Relacion } = req.body;
    const sql = 'CALL ContactoEmergenciaCreate(?, ?, ?, ?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [IdUsuario, Nombre, NumeroTelefono, Relacion]);
        res.send('Cobro creado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
