import express from 'express';
import { MySqlConnection } from './database/DBConnection.js';
import { PORT } from './config/ConfiguracionInicial.js';

import RouterEjercicio from "./routers/rtEjercicio/RouterEjercicio.js";
import RouterCatEje from "./routers/rtCategoriaEjercicio/RouterCatEje.js";

const app = express();
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


app.use('/ejercicio', RouterEjercicio);
app.use('/catEje', RouterCatEje)

