import express from 'express';
const router = express.Router();

import {consultTipoTransaccion} from "../../controllers/ctrTipoTransaccion/ConsultTipoTransaccion.js";

// Router para Consultar tipo de transaccion
router.get('/:id?', consultTipoTransaccion);

export default router;
