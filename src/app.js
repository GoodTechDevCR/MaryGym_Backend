import express from 'express';
import { MySqlConnection } from './database/DBConnection.js';
import { PORT } from './config/ConfiguracionInicial.js';
import { DB_PORT } from './config/ConfiguracionInicial.js';
import cors from 'cors';

import RouterEjercicio from "./routers/rtEjercicio/RouterEjercicio.js";
import RouterCatEje from "./routers/rtCategoriaEjercicio/RouterCatEje.js";
import RouterUsuarios  from "../src/routers/rtUsuario/RouterUsuario.js";
import RouterServicios  from "../src/routers/rtServicio/RouterServicio.js";
import RouterCobros from "../src/routers/rtCobro/RouterCobro.js";
import RouterTipoTransaccion from "./routers/rtTipoTransaccion/RouterTipoTransaccion.js";
import RouterPago from "./routers/rtPago/RouterPago.js";
import RouterLogin from "./routers/rtLogin/RouterLogin.js";
import RouterServicioApi from "./routers/rtServicioAPI/RouterServicioApi.js"
import RouterContactoEmergencia from "./routers/rtContactoEmergencia/RouterContactoEmergencia.js"
import RouterAbono from './routers/rtAbono/RouterAbono.js';
import RouterRutinaXUsuario from "./routers/rtRutinaXUsuario/RouterRutinaXUsuario.js";

// Archivos de Cron para que se ejecuten periodicamente
import './services/CobrosVencidos.js';
import './services/CumpleRecordatorio.js';

const app = express();
app.use(express.json());

// Configuración de CORS
const allowedOrigins = ['https://marygym.netlify.app', 'http://localhost:3000'];
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true,
}));

app.listen(PORT, () => {
    console.log("Server on port ", PORT);
    console.log("mysql port: ", DB_PORT);
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
app.use('/servicioAPI', RouterServicioApi);
app.use('/contactoEme', RouterContactoEmergencia);
app.use('/login', RouterLogin);
app.use('/servicioAPI', RouterServicioApi);
app.use('/abono', RouterAbono);
app.use('/rutinaXusuario', RouterRutinaXUsuario);
