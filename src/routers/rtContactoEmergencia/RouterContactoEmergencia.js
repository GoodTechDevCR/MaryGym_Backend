import { Router } from 'express';

import { createContactoEme, createContactoEmeUnico} from '../../controllers/ctrContactoEmergencia/CreateContactoEme.js';

import { consultContactoEmergencia } from '../../controllers/ctrContactoEmergencia/ConsultContactoEme.js';

import { deleteContactoEme } from '../../controllers/ctrContactoEmergencia/DeleteContactoEme.js';

import { updateContactoEme } from '../../controllers/ctrContactoEmergencia/UpdateContactoEme.js';

const router = Router();

//solicitud tipo get para obtener los contactos de emergencia
router.get('/:id?', consultContactoEmergencia);

//solicitud de tipo post para crear los contactos de emergencia
router.post('/', createContactoEme);

//solicitud de tipo post para crear UN SOLO contacto emergencia
router.post('/unico', createContactoEmeUnico);

//solicitud de tipo delete para borrar los contactos de emergencia
router.delete('/:id', deleteContactoEme);

//solicitud de tipo put para update para modificar los contactos de emergencia
router.put('/', updateContactoEme);

export default router;