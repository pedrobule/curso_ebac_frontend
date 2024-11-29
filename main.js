class Filhas {
    constructor(nome) {
    if (this.constructor === Filhas) {
        throw new Error("Não é permitido instanciar a classe Filhas diretamente.");
    }
    this.nome = nome;
    }


    emitirSom() {
    throw new Error("Método 'emitirSom' precisa ser implementado.");
    }

    falar() {
    return `${this.nome} é, precisa esperar o natal Tutu!.`;
    }
}


class Primogenita extends Filhas {
    constructor(nome) {
    super(nome);
    }

    
    emitirSom() {
    return `${this.nome} diz: Quero meu presente!`;
    }
}

class Caçula extends Filhas {
    constructor(nome) {
    super(nome); 
    }

    
    emitirSom() {
    return `${this.nome} diz: Tem que esperar o natal!`;
    }
}


const filha1 = new Primogenita ("Tutu");
const filha2 = new Caçula ("Violeta");
const mamae = new Primogenita("Mamãe");


console.log(filha1.emitirSom());  
console.log(filha2.emitirSom());      
console.log(filha1.emitirSom()); 
console.log(mamae.falar());     