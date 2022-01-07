const cpfSemFormat = (`71246841446852`);
console.log(cpfSemFormat);

const cpfFormar = cpfSemFormat.replace('71246841446852', '712.468.414.468-52');
console.log(cpfFormar);

const cpfRestrito = cpfFormar.replace('468','***');//Só o primeiro 468
//const cpfRestrito = cpfFormar.replace(/468/g,'***');//Todos os 468
console.log(cpfRestrito)

const cpf = '12345679810'

const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

console.log(cpfFormatado)