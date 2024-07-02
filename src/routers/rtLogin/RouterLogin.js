import express from 'express';
const router = express.Router();

import {validate} from "../../controllers/ctrLogin/validateLogin.js";

//ruta para iniciar sesion
router.post('/validate', validate);

export default router;