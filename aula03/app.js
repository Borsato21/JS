// function pegaNome(){
//     let nome = "Vítor"
//     return nome //exencial para devolver 
// }

// function exibirNome(nomeUser, sobrenome){
//     nomeUser
//     sobrenome
//     let resultado = pegaNome()
//     let nome = ""
//     console.log(resultado)
// }

// exibirNome("Vítor", "Borsato")

// function somanumeros(primeiro, segundo = 0){
//     return primeiro + segundo
// }

// console.log(somanumeros( 5, 17))
// console.log(somanumeros( 16, 12))
// console.log(somanumeros(17))

// const somaNumeros = (numero1, numero2) => numero1 + numero2

// function recebernome(){
//     let nome = prompt("Digite o nome de Usuario: ")
//     return nome
// }

// function receberidade(){
//     let idade = prompt("Digite sua idade: ")
//     return idade
// }

// function tudo(nome, idade){
//      alert(`Nome é ${nome || "Fulano"} idade é ${idade || "Velho"}`)
// }

// function chamar(){
//     const nome = recebernome()
//     const idade = receberidade()
//     tudo(nome , idade)
// }

// chamar()

let nome = "Vitor"
console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLocaleLowerCase())
console.log(nome.includes("r"))
console.log(nome.includes("p"))
console.log(nome.trim()) // corta espaço

if(nome.length < 3){
    alert("Isso não é um nome")
}


let numero = 5

console.log(numero.toFixed(3))
console.log(isNaN(nome))

console.log(Math.floor(Math.random()*11))
console.log(Math.round(Math.random()*11))
console.log(Math.ceil(Math.random()*11))

let dataatual = new Date()
console.log(dataatual)