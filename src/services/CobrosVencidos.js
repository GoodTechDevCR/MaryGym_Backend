const cron = require('node-cron');
const mysql = require('mysql2/promise');

import { 
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
 } from '../config/ConfiguracionInicial.js'

// función para ejecutar el procedimiento almacenado de eliminar cobros vencidos 
async function eliminarCobrosVencidos() {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    });

    const query = 'CALL EliminarCobrosVencidos()';
    await connection.execute(query);
    await connection.end();
}

// Para que la tarea para que se ejecute diariamente a la 1 de la mañana
cron.schedule('0 1 * * *', () => {
    eliminarCobrosVencidos().then(() => {
        console.log('Cobros vencidos eliminados correctamente');
    }).catch((err) => {
        console.error('Error eliminando cobros vencidos:', err);
    });
});
