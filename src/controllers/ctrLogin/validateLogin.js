import { MySqlConnection } from '../../database/DBConnection.js';

export const validateLogin = async (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({ alert: 'error', message: 'Usuario y contraseña son requeridos' });
    }

    console.log('Datos recibidos del cliente:', { usuario, contrasena });

    try {
        // Obtener una conexión
        const connection = await MySqlConnection.getConnection();

        // Llamar al procedimiento almacenado
        const query = 'CALL ValidateLogin(?, ?, @OutResultCode)';
        const params = [usuario, contrasena];
        await connection.execute(query, params);

        // Obtener el resultado del procedimiento almacenado
        const [rows] = await connection.query('SELECT @OutResultCode AS result_code');

        // Liberar la conexión
        connection.release();

        // Obtener el resultado del código de resultado
        const resultCode = rows[0].result_code;
        console.log("Resultado: ", resultCode);

        // Manejar el resultado y enviar la respuesta correspondiente
        switch (resultCode) {
            case 1:
                return res.status(200).json({ alert: 'success', message: 'Login exitoso' });
            case 506:
                return res.status(401).json({ alert: 'error', message: 'El usuario no existeAAAA' });
            case 507:
                return res.status(401).json({ alert: 'error', message: 'La contraseña es incorrecta' });
            default:
                return res.status(500).json({ alert: 'error', message: 'Error desconocido' });
        }
    } catch (error) {
        console.error('Error en el login:', error);
        return res.status(500).json({ alert: 'error', message: 'Error en el servidor' });
    }
};
