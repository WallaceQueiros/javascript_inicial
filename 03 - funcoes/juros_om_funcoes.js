
function aplicaDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicaJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoProduto = 50.43;
const formaPagamento = 1;

  if (formaPagamento === 1) {
    console.log(aplicaDesconto(precoProduto, 10).toFixed(2) + "R$")
  } else if (formaPagamento === 2) {
    console.log(aplicaDesconto(precoProduto, 15).toFixed(2) + "R$")
  } else if (formaPagamento === 3) {
    console.log(precoProduto.toFixed(2) + "R$");
  } else {
    console.log(aplicaJuros(precoProduto, 10).toFixed(2) + "R$")
  }




