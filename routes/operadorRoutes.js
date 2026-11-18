import express from 'express';
import { cadastrarOperador, listarOperadores, atualizarOperador, deletarOperador} from '../controller/operadorController.js';

const router = express.Router();

router.post('/', cadastrarOperador);
router.get('/', listarOperadores);
router.put('/:id', atualizarOperador);
router.delete('/:id', deletarOperador);

export default router;