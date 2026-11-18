export class Maquina {

    nome;
    patrimonio;
    status;

    constructor(nome, patrimonio, status) {
        if(!nome || nome.trim().length < 3) {
            throw new Error('O nome deve ter no minimo 3 caracteres')
        }
        if(!patrimonio || patrimonio === '') {
            throw new Error('O patrimonio e obrigatorio')
        }
        if(!status || status === '') {
            throw new Error('O status e obrigatorio')
        }

        this.nome
        this.patrimonio
        this.status

    }

    get nome() {
        return this.nome
    }
    
    get patrimonio() {
        return this.patrimonio
    }

    get status() {
        return this.status
    }
}