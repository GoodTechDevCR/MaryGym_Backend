import express from 'express';
import { MySqlConnection } from './database/DBConnection.js';
import { PORT } from './config/ConfiguracionInicial.js';
import cors from 'cors';

import RouterEjercicio from "./routers/rtEjercicio/RouterEjercicio.js";
import RouterCatEje from "./routers/rtCategoriaEjercicio/RouterCatEje.js";
import RouterUsuarios  from "../src/routers/rtUsuario/RouterUsuario.js";
import RouterServicios  from "../src/routers/rtServicio/RouterServicio.js";
import RouterCobros from "../src/routers/rtCobro/RouterCobro.js";
import RouterTipoTransaccion from "./routers/rtTipoTransaccion/RouterTipoTransaccion.js";
import RouterPago from "./routers/rtPago/RouterPago.js";
import RouterAbono from './routers/rtAbono/RouterAbono.js';

// Importa el archivo CobrosVencidos.js para que se ejecute
import './services/CobrosVencidos.js';

const app = express();
app.use(express.json());
// Permitir solicitudes desde el origen de tu frontend
app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu frontend
    credentials: true,
}));

app.listen(PORT, () => {
    console.log("Server on port ", PORT);
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

// Rutas
app.use('/usuario', RouterUsuarios);
app.use('/cobro', RouterCobros);
app.use('/servicio', RouterServicios);
app.use('/ejercicio', RouterEjercicio);
app.use('/catEje', RouterCatEje);
app.use('/tipoTran', RouterTipoTransaccion);
app.use('/pago', RouterPago);
app.use('/abono', RouterAbono);
