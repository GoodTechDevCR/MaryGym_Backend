// services/CumpleRecordatorio.js

import cron from 'node-cron';
import mysql from 'mysql2/promise';
import { EnvioCorreoCumpleanosAdmin } from '../services/EmailSender.js';
import { 
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
} from '../config/ConfiguracionInicial.js';

// función para obtener usuarios con cumpleaños próximos
async function obtenerCumpleaniosProximos() {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    });

    const query = 'CALL UsuarioConsult(0)'; // Llamamos al SP existente
    const [rows] = await connection.execute(query);
    await connection.end();

    const today = new Date();
    const proximosCumpleanios = rows[0].filter(usuario => {
        const cumpleanos = new Date(usuario.fechanacimiento);
        cumpleanos.setFullYear(today.getFullYear());

        const diferenciaDias = (cumpleanos - today) / (1000 * 60 * 60 * 24);
        return diferenciaDias === 5 || diferenciaDias === 1;
    });

    return proximosCumpleanios;
}

// función para enviar recordatorios de cumpleaños
async function enviarRecordatorioCumpleanos() {
    const adminEmail = 'admin@gmail.com';
    const usuarios = await obtenerCumpleaniosProximos();
    if (usuarios.length > 0) {
        await EnvioCorreoCumpleanosAdmin(adminEmail, usuarios);
    } else {
        console.log("No upcoming birthdays to remind.");
    }
}

// Programar la tarea para que se ejecute diariamente a la 1 de la tarde
cron.schedule('0 13 * * *', () => {
    enviarRecordatorioCumpleanos().then(() => {
        console.log('Recordatorios de cumpleaños enviados correctamente');
    }).catch((err) => {
        console.error('Error enviando recordatorios de cumpleaños:', err);
    });
});
