import { Maquina } from '../model/Maquina.js';
import { atualizar, cadastrar, listar, deletar, buscarPorId } from '../repository/maquinaRepository.js';

export async function cadastrarMaquina(req, res) {
    try {
        const { nome, patrimonio, status} = req.body;
        const maquina = new Maquina(nome, patrimonio, status)
        const resultado = await cadastrar(maquina)
        res.status(201).json({message: 'Maquina cadastrada', id: resultado.insertId })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

export async function listarMaquinas(req, res) {
    try {
        const listaDeMaquinas = await listar()
        res.status(200).json(listaDeMaquinas)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

export async function buscarMaquinaPorId( req, res) {
    try {
        const { id } = req.params;
        const maquina = await buscarPorId(id)
        if(!maquina) {
            return res.status(400).json({message: 'Maquina nao encontrada'})
        }
        res.status(200).json(maquina)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
};

export async function atualizarMaquina(req, res) {
    try {
        const { id } = req.params;
        const { nome, patrimonio, status } = req.body;
        const maquina = new Maquina(nome, patrimonio, status)
        const affectedRows = await atualizar(id, maquina)
        if(affectedRows === 0) {
            return res.status(400).json({message: 'Maquina nao encontrada'})
        }
        res.status(200).json({message: 'Maquina atualizada'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function deletarMaquina(req, res) {
    try {
        const { id } = req.params;
        const affectedRows = await deletar(id);
        if(affectedRows === 0) {
            res.status(400).json({message: 'Maquina nao encontrada'})
        }
        res.status(200).json({message: 'Maquina deletada'})
    } catch (error) {
        res.status(200).json({error: error.message})
    }
}