
function imprimaMeuNome(nome) {
  return ("Meu nome é " + nome);
}


function verificaIdade(idade) {
  if (idade >= 18) {
    console.log(imprimaMeuNome('Wallace') + " e sou maior de idade");
  } else {
    console.log("Não é maior de idade");
  }
}

verificaIdade(19);
verificaIdade(17);
