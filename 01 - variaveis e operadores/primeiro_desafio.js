const combustivelGasolina = 5.50;
const combustivelEtanol = 3.50;
const tipoCombustivel = 'Etanol';
const distancia = 100;
const consumo = 10;

if (tipoCombustivel === 'Gasolina'){
    let gasto_combustivel = (distancia/consumo) * combustivelGasolina;
    console.log(gasto_combustivel.toFixed(2));
} else if (tipoCombustivel === 'Etanol') {
    let gasto_combustivel = (distancia/consumo) * combustivelEtanol;
    console.log(gasto_combustivel.toFixed(2));
}


