import { MySqlConnection } from '../../database/DBConnection.js';

// Controlador para Consultar usuario
export const consultUsuario = async (req, res) => {
    const { id } = req.params;
    const sql = 'CALL UsuarioConsult(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [id || 0]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};



// Controlador para Consultar usuario segun su correo
export const consultUsuarioByCorreo = async (req, res) => {
    const { correo } = req.params;
    const sql = 'CALL UsuarioByCorreo(?)';
    try {
        const [result] = await MySqlConnection.execute(sql, [correo]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

