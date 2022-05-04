import express from 'express';
import controller from '../controllers/tiendaCursos'

const router = express.Router();

router.get('/tiendaCursos', controller.getAll);
router.post('/tiendaCursos', controller.create);
router.patch('/tiendaCursos/:id', controller.update);
router.delete('/tiendaCursos/:id', controller.remove);
router.get('/tiendaCursos/:id', controller.get);

export = router;