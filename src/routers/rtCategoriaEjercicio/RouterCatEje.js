import { Router } from 'express';

import {consultCategoriaEjercicio} from "../../controllers/ctrCategoriaEjercicio/ConsultCatEje.js";

import {deleteCategoriaEjercicio} from "../../controllers/ctrCategoriaEjercicio/DeleteCatEje.js";

import {createCategoriaEjercicio} from "../../controllers/ctrCategoriaEjercicio/CreateCatEje.js";

import {updateCategoriaEjercicio} from "../../controllers/ctrCategoriaEjercicio/UpdateCatEje.js";

const router = Router();

//solicitud tipo get para obtener las categorias de ejercicios
router.get('/:id?', consultCategoriaEjercicio);



//solicitud de tipo post para crear las categorias deejercicios
router.post('/', createCategoriaEjercicio);

//solicitud de tipo delete para borrar las categorias de ejercicios
router.delete('/:id', deleteCategoriaEjercicio);

//solicitud de tipo put para update para modificar los ejercicios
router.put('/', updateCategoriaEjercicio);

export default router;
