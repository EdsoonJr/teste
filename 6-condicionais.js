const listaDeCoisas = new Array(
    `Recife`,
    `Caruaru`,
    `Analista`
);

const idadeComprador = 17;
const acompanhado = true;
let passagemComprada = false;
console.log(`Destinos Possiveis`);
console.log(listaDeCoisas.sort());

if (idadeComprador >= 18 || acompanhado == true) {
    console.log(`Comprador maior de Idade Ou Acompanhado ${idadeComprador}`);
    listaDeCoisas.splice(1, 1);
    console.log(listaDeCoisas);
    passagemComprada = true;
    console.log("Passagem comprada")

} else {
    console.log("Menor de Idade")
    console.log(listaDeCoisas.sort());
    passagemComprada = false;


}

console.log("Ebarque")

if ((idadeComprador >= 18 || acompanhado == true) && passagemComprada == true) {
    console.log("Pode Entrar,Boa viagem")
}