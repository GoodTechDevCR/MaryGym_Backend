import express from 'express';
import { MySqlConnection } from './database/DBConnection.js'; // Asegúrate de usar la ruta correcta y la extensión .js
import { PORT } from './config.js';


const app = express();

app.listen(PORT, () => {
    console.log("Server on port ",PORT);
});

app.get('/', (req, res) => {
    res.send("bienvenido");
});

app.get('/ping', async (req, res) => {
    try {
        const result = await MySqlConnection.query('SELECT "hola" as prueba;');
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en la conexión a la base de datos");
    }
});


app.get('/create', async (req, res) => {
    const result = await MySqlConnection.query('INSERT INTO user(name) VALUES ("John")')
    res.json(result)
  })
