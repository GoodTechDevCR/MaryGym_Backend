import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para Eliminar usuario
export const deleteContactoEme = async (req, res) => {
    const { id } = req.params;
    const sql = 'call ContactoEmergenciaDelete(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id]);
        res.send('Contacto emergencia eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
