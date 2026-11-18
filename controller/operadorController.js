import { Operador } from '../model/Operador.js';
import { atualizar, cadastrar, listar, deletar, buscarPorId } from '../repository/operadorRepository.js';

export async function cadastrarOperador(req, res) {
    try {
        const { nome, matricula, turno } = req.body;
        const operador = new Operador(nome, matricula, turno);
        const resultado = await cadastrar(operador);
        res.status(201).json({message: 'Operador cadastrado', id: resultado.insertId}) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

export async function listarOperadores(req, res) {
    try {
        const listaDeOperarios = await listar()
        res.status(200).json(listaDeOperarios)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export async function buscarOperadorPorId(req, res) {
    try {
        const { id } = req.params;
        const operador = await buscarPorId(id);
        if(!operador) {
            return res.status(400).json({message: 'Operador nao encontrado'})
        }
        res.status(200).json(operador)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export async function atualizarOperador(req, res) {
    try {
        const { id } = req.params;
        const { nome, matricula, turno } = req.body;
        const operador = new Operador(nome, matricula, turno)
        const affectedRows = await atualizar(id, operador)
        if(affectedRows === 0) {
            return res.status(400).json({message: 'Operador nao encontrado'})
        }
        res.status(200).json({message: 'Operador atualizado'}) 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export async function deletarOperador(req, res) {
    try {
        const { id } = req.params;
        const affectedRows = await deletar(id)
        if(affectedRows === 0) {
            res.status(400).json({message: 'Operador nao encontrado'})
        }
        res.status(200).json({message: 'Operador deletado'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}