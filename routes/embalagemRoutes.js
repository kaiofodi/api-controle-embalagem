import express from 'express';
import { cadastrarEmbalagem, listarEmbalagens, atualizarEmbalagem, deletarEmbalagem } from '../controller/embalagemController.js';

const router = express.Router();

router.post('/', cadastrarEmbalagem);
router.get('/', listarEmbalagens);
router.put('/:id', atualizarEmbalagem);
router.delete('/:id', deletarEmbalagem);

export default router;