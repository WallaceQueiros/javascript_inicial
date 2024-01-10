const peso = 40.1;
const altura = 1.00;

let IMC = peso / (altura * altura);
console.log(IMC.toFixed(1))

if (IMC < 18.5){
    console.log(IMC.toFixed(1))
} else if (IMC >= 18.5 && IMC < 25 ){
    console.log('Peso Normal')
} else if (IMC >= 25 && IMC < 30){
    console.log('Excesso de Peso')
} else if (IMC >= 30 && IMC < 40){
    console.log('Obesidade')
} else{
    console.log('Obesidade Grave')
}