export class Embalagem {

    descricao;
    material;
    capacidade;

    constructor(descricao, material, capacidade) {
        if(!descricao || descricao.trim().length < 3) {
            throw new Error('A descricao deve ter no minimo 3 caracteres.')
        }
        if(!material || material === "") {
            throw new Error('O material e obrigatorio.')
        }
        if(!capacidade || capacidade > 0) {
            throw new Error('A capacidade deve ser maior que 0.')
        }

        this.descricao = descricao
        this.material = material
        this.capacidade = capacidade

        }

        get descricao() {
            return this.descricao;
    }

        get material() {
            return this.material
    }
        
        get capacidade() {
            return this.capacidade
        }
}