import express from 'express';
const router = express.Router();

import {createRutinaXUsuario} from "../../controllers/ctrRutinaXUsuario/createRutinaXUsuario.js";

//ruta para crear un pago
router.post('/', createRutinaXUsuario);

export default router;
