export class Operador {

    nome;
    matricula;
    turno;

    constructor(nome, matricula, turno) {
        if(!nome || nome.trim().length < 3) {
            throw new Error('O nome deve ter no minimo 3 caracteres')
        }

        if(!matricula || matricula === '') {
            throw new Error('A matricula e obrigatoria')
        }
        if(!turno || turno === '') {
            throw new Error('O turno e obrigatorio')
        }


        this.nome = nome
        this.matricula = matricula
        this.turno = turno
    }

    get nome() {
        return this.nome
    }

    get matricula() {
        return this.matricula
    }

    get turno() {
        return this.turno
    }
}