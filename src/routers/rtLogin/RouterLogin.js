import express from 'express';
const router = express.Router();

import {validateLogin} from "../../controllers/ctrLogin/validateLogin.js";

//ruta para iniciar sesion
router.post('/validateLogin', validateLogin);

export default router;