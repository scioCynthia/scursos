import express from 'express';
import controller from '../controllers/curso'

const router = express.Router();

router.get('/curso', controller.getAll);
router.post('/curso', controller.create);
router.patch('/curso/:id', controller.update);
router.delete('/curso/:id', controller.remove);
router.get('/curso/:id', controller.get);

export = router;