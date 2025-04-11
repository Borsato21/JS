
const apikey = "sxdcfvgbhnjm"



console.log(5==5)
console.log("5"==5)
console.log(""==0)
console.log(false == 0)
console.log(5===5)
console.log("5"===5)
console.log("uva" > "banana")//Contagem de letras o U esta atras
console.log("Uva" > "banana")//Prioridade em maiusculas

let nome = "Vítor"
if (nome === "Vítor" || nome === null) {
    console.log("É você!")
}
else if(nome === "Oi"){
    console.log("Ola Oi!")
}
else {
    console.log("Não é você")
}

nome === "Vítor" ? console.log("É você!") : console.log("Sai daqui!")


// nome = prompt("Insira o nome de usuario: ")
// senha = prompt("Insira a senha: ")

// if (nome === "admin" && senha === "1234") {
//     alert("Bem vindo ao sistema!")
// }
// else {
//     alert("Esta errado ou usuario esta errado senha!")
// }

// nome = prompt("Insira o nome de usuario: ")
// senha = prompt("Insira a senha: ")

// if (
//     (nome === "admin" && senha === "1234") || 
//     (nome === "oi" && senha === "12345") || 
//     (nome === "abc" && senha === "123")
// ) {
//     alert("Bem vindo ao sistema!")
// }
// else {
//     alert("Esta errado ou usuario esta errado senha!")
// }


let nomeuser = "Vítor"
let sobrenome = "Borsato"
let  apelido = "Vitinho"

let nomefinal = apelido || sobrenome || nomeuser || "Convidado"
console.log(nomefinal)

switch(nome){
    case "Vítor":
        console.log("É vc")
        break
    case "vitinho":
        console.log("È apelido")
        break
    default:
        console.log("Não te conheço")
}