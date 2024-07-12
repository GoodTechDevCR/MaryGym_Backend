import express from 'express';
const router = express.Router();

import {createRutinaXUsuario} from "../../controllers/ctrRutinaXUsuario/CreateRutinaXUsuario.js";

import {consultRutinaXUsuario} from "../../controllers/ctrRutinaXUsuario/ConsultRutinaXUsuario.js";
//ruta para crear un pago
router.post('/', createRutinaXUsuario);

router.get('/:id', consultRutinaXUsuario);

export default router;
