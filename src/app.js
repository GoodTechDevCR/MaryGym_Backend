import express from 'express';
import { MySqlConnection } from './database/DBConnection.js'; // Asegúrate de usar la ruta correcta y la extensión .js
import { PORT } from './config/ConfiguracionInicial.js';
import RouterUsuarios  from "../src/routers/rtUsuario/RouterUsuario.js"; 
import RouterServicios  from "../src/routers/rtServicio/RouterServicio.js";
import RouterCobros from "../src/routers/rtCobro/RouterCobro.js";

const app = express();

// Middleware para analizar cuerpos de solicitud JSON
app.use(express.json());

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
    const result = await MySqlConnection.query('INSERT INTO user(name) VALUES ("samir")')
    res.json(result)
  })

// Rutas
app.use(RouterUsuarios);
app.use(RouterServicios);
app.use(RouterCobros);
