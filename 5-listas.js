const listaDeCoisas = new Array(
    `Recife`,
    `Caruaru`,
    `Analista`
);

console.log(listaDeCoisas);
listaDeCoisas.push(`Cu`);
console.log(listaDeCoisas);
console.log(listaDeCoisas.sort());
listaDeCoisas.splice(1,1);
console.log(listaDeCoisas);
console.log(listaDeCoisas[1]);