import { Router } from 'express';

import {consultEjercicio} from "../../controllers/ctrEjercicio/ConsultEjercicio.js";

import {deleteEjercicio} from "../../controllers/ctrEjercicio/DeleteEjercicio.js";

import {createEjercicio} from "../../controllers/ctrEjercicio/CreateEjercicio.js";

import {updateEjercicio} from "../../controllers/ctrEjercicio/UpdateEjercicio.js";

const router = Router();

//solicitud tipo get para obtener los ejercicios
router.get('/:id?', consultEjercicio);

//solicitud de tipo post para crear los ejercicios
router.post('/', createEjercicio);

//solicitud de tipo delete para borrar los ejercicios
router.delete('/:id', deleteEjercicio);

//solicitud de tipo put para update para modificar los ejercicios
router.put('/', updateEjercicio);

export default router;
