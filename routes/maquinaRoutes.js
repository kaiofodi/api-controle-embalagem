import express from 'express';
import { cadastrarMaquina, listarMaquinas, atualizarMaquina, deletarMaquina} from '../controller/maquinaController.js';

const router = express.Router();

router.post('/', cadastrarMaquina);
router.get('/', listarMaquinas);
router.put('/:id', atualizarMaquina);
router.delete('/:id', deletarMaquina);

export default router;