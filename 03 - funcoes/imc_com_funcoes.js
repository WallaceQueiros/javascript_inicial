function calculaIMC (peso, altura) {
    return peso / (altura * altura);
}


function classificaIMC (IMC) {
    if (IMC < 18.5){
        return ('Abaixo do Peso')
    } else if (IMC >= 18.5 && IMC < 25 ){
        return ('Peso Normal')
    } else if (IMC >= 25 && IMC < 30){
        return ('Excesso de Peso')
    } else if (IMC >= 30 && IMC < 40){
        return ('Obesidade')
    } else{
        return ('Obesidade Grave')
    }
}

// Main
(function () {
    const peso = 30.3
    const altura = 1.00
    
    const IMC = calculaIMC(peso, altura);   
    console.log(classificaIMC(IMC)) 
    console.log(IMC.toFixed(1)) 
})();

/*main();*/
