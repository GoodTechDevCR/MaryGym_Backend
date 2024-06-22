import { Router } from 'express';

import {consultCategoriaEjercicio} from "../../controllers/ctrCategoriaEjercicio/ConsultCatEje.js";

import {deleteCategoriaEjercicio} from "../../controllers/ctrCategoriaEjercicio/DeleteCatEje.js";

import {createCategoriaEjercicio} from "../../controllers/ctrCategoriaEjercicio/CreateCatEje.js";

const router = Router();

//solicitud tipo get para obtener las categorias de ejercicios
router.get('/:id?', consultCategoriaEjercicio);

//solicitud de tipo post para crear las categorias deejercicios
router.post('/', createCategoriaEjercicio);

//solicitud de tipo delete para borrar las categorias de ejercicios
router.delete('/:id', deleteCategoriaEjercicio);

export default router;
