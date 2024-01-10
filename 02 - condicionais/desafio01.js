const nota01 = 4.0
const nota02 = 4.0

let media = (nota01 + nota02) / 2

if (media < 5){
    console.log(media)
    console.log('Reporvado')
} else if (media >= 5 && media < 7){
    console.log(media)
    console.log('Recuperação')
} else{
    console.log(media)
    console.log('Aprovado')
}