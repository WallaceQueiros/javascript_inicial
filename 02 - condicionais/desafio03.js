const precoProduto = 50.43
const formaPagamento = 1

if (formaPagamento === 1){
    console.log(precoProduto - (precoProduto * 0.1).toFixed(2)+'R$');
}else if (formaPagamento === 2){
    console.log(precoProduto - (precoProduto * 0.15).toFixed(2)+'R$')
}else if (formaPagamento === 3){
    console.log(precoProduto.toFixed*2)+'R$';
}else{
    console.log(precoProduto + (precoProduto * 0.1).toFixed(2)+'R$');
}