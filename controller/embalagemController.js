import { Embalagem } from "../model/Embalagem.js";
import { atualizar, cadastrar, listar, deletar, buscarPorId } from '../repository/embalagemRepository.js';

export async function cadastrarEmbalagem(req, res) {
    try {
        const { descricao, material, capacidade } = req.body;
        const embalagem = new Embalagem(descricao, material, capacidade);
        const resultado = await cadastrar(embalagem);
        res.status(201).json({message: 'Embalagem cadastrada', id: resultado.insertId });
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

export async function listarEmbalagens(req, res) {
    try {
        const listaDeEmbalagens = await listar();
        res.status(200).json(listaDeEmbalagens); 
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export async function buscarEmbalagemPorId(req, res) {
    try {
        const { id } = req.params;
        const embalagem = await buscarPorId(id);
        if(!embalagem) {
            return res.status(400).json({message: 'Embalagem nao encontrada'});
        }
        res.status(200).json(embalagem)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export async function atualizarEmbalagem(req, res) {
    try {
        const { id } = req.params;
        const { descricao, material, capacidade } = req.body;
        const embalagem = new Embalagem(descricao, material, capacidade);
        const affectedRows = await atualizar(id, embalagem);
        if( affectedRows === 0) {
            return res.status(404).json({ message: 'Equipamento nao encontrado' });
        }
        res.status(200).json({message: 'Embalagem atualizada'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function deletarEmbalagem(req, res) {
    try {
        const { id } = req.params;
        const affectedRows = await deletar(id);
        if(affectedRows === 0) {
            return res.status(404).json({message: 'Embalagem nao encontrada'})
        }
        return res.status(200).json({message: 'Embalagem deletada'});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}