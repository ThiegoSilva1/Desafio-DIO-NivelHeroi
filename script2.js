let jogadorNivel;
function cartel(vitorias, derrotas){
    return vitorias - derrotas;
}
let saldoVitorias = cartel ( 58, 30 ) 
     
    if (saldoVitorias < 10) {
        jogadorNivel = "Ferro";
     }else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
         jogadorNivel = "Bronze"
     }else if (saldoVitorias >= 21 &&  saldoVitorias <= 50) {
         jogadorNivel = "Prata"
     }else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
         jogadorNivel = "Ouro"
     }else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
         jogadorNivel = "Diamante"
     }else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
         jogadorNivel = "Lendário"
     }else if (saldoVitorias >= 101 ) {
         jogadorNivel = "Imortal"
     }


console.log( "O Herói tem de saldo de " + (saldoVitorias) + " vitórias, e está no nível de " + ( jogadorNivel) + "."); 
