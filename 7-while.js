const listaDeCoisas = new Array(
    `Recife`,
    `Caruaru`,
    `Analista`
);

const idadeComprador = 17;
const acompanhado = true;
let passagemComprada = false;
const destino = `Analista`

console.log(`Destinos Possiveis`);
console.log(listaDeCoisas);
//console.log(listaDeCoisas.sort());

const podeComprar = (idadeComprador >= 18 || acompanhado == true)

let ind = 0;
let destinoExiste = false
while (ind < 3) {

    if (listaDeCoisas[ind] == destino) {
        console.log(`Seu Destino é ${listaDeCoisas[ind]}`)
        destinoExiste = true
        break
    } 
        
    
    ind += 1;


}

if(destinoExiste == false){
    console.log("Destino não existe");
}
console.log("Ebarque")

if(podeComprar && destinoExiste){
    console.log("Boa Viagem")
}else{
console.log("Desculpa erro")
}