class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    tipoAtaque() {
        
        const tipo = this.tipoHeroi.toLowerCase();//convertendo os tipos de caracteres dos tipos de heroi todos em minusculos

        switch (tipo) {
            case "mago":
                return "Magia";
            case "guerreiro":
                return "Espada";
            case "monge":
                return "Artes Marciais";
            case "ninja":
                return "Shuriken";
            default:
                return "ataque desconhecido !!!";
        }
    }

    saida() {
        const ataque = this.tipoAtaque(); // Obtendo o ataque baseado no tipo de guerreiro
        console.log(
            `O ${this.nomeHeroi}, herói do tipo ${this.tipoHeroi}, atacou usando ${ataque}.`
        );
    }
    respostaPedida(){
        const ataque = this.tipoAtaque();
        console.log(
            `(**Resposta da forma que o desafio pede**) O ${this.tipoHeroi}, atacou usando ${ataque}.`

        ); 
    }
}

// Exemplo de uso
let heroi1 = new Heroi("Mestre Yoda", 900, "Mago");
heroi1.saida();
heroi1.respostaPedida();

let heroi2 = new Heroi("Luke Skywalker", 23, "guerreiro");
heroi2.saida();
heroi2.respostaPedida();

let heroi3 = new Heroi("Darth Vader", 45, "monge");
heroi3.saida();
heroi3.respostaPedida();
 
let heroi4 = new Heroi("Boba Fett", 40, "Ninja");
heroi4.saida()
heroi4.respostaPedida();;

let heroi5 = new Heroi("Leia Organa", 19, "princesa");
heroi5.saida();
heroi5.respostaPedida();

let heroi6 = new Heroi("Han Solo", 32, "Guerreiro");
heroi6.saida();
heroi6.respostaPedida();

let heroi7 = new Heroi("Chewbacca", 200, "MONGE");
heroi7.saida();
heroi7.respostaPedida();

let heroi8 = new Heroi("Obi-Wan Kenobi", 57, "mago");
heroi8.saida();
heroi8.respostaPedida();

let heroi9 = new Heroi("Kylo Ren", 29, "GUERREIRO");
heroi9.saida();
heroi9.respostaPedida();

let heroi10 = new Heroi("Grogu", 50, "alienígena");
heroi10.saida();
heroi10.respostaPedida();
