import { MySqlConnection } from '../../database/DBConnection.js';

export const validateLogin = async (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        return res.status(400).json({ alert: 'error', message: 'Usuario y contraseña son requeridos' });
    }
    // Log para mostrar los datos recibidos del cliente
    console.log('Datos recibidos del cliente:', { usuario, contrasena });

    let connection;

    try {
        connection = await MySqlConnection.getConnection();

        // Llamar al procedimiento almacenado
        const query = 'CALL ValidateLogin(?, ?, @OutResultCode)';
        const params = [usuario, contrasena];
        await connection.query(query, params);

        // Obtener el resultado del procedimiento almacenado
        const resultQuery = 'SELECT @OutResultCode';
        const [rows] = await connection.query(resultQuery);

        // Obtener el resultado del código de resultado
        const resultCode = rows[0].result_code;
        console.log("Resultado: ", resultCode);
        // Manejar el resultado y enviar la respuesta correspondiente
        switch (resultCode) {
            case 1:
                res.status(200).json({ alert: 'success', message: 'Login exitosoppp' });
                break;
            case 506:
                res.status(401).json({ alert: 'error', message: 'El uAAAAAAAAAAaaao no existe' });
                break;
            case 507:
                res.status(401).json({ alert: 'error', message: 'La contraseña es incorrecta' });
                break;
            default:
                res.status(500).json({ alert: 'error', message: 'Error desconocido' });
                break;
        }
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ alert: 'error', message: 'Error en el servidor' });
    } finally {
        if (connection) connection.release();
    }
};
