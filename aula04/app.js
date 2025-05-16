// const btnClicar = document.getElementById("btnClicar")
// const paragrafo = document.getElementById("paragrafo")

// btnClicar.addEventListener("click", function (){
//     paragrafo.textContent = "Vai Peixão"
// })

const form = document.getElementById("form")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputAssunto = document.getElementById("assunto")
const inputMensagem = document.getElementById("mensagem")
const btnEnviar = document.getElementById("btnEnviar")
const mensagemErro = document.getElementById("mensagemErro")
const cadastro = document.getElementById("cadastro")

btnEnviar.addEventListener("click", function (event){
    event.preventDefault()
    let nome = inputNome.value 
    let email = inputEmail.value
    let assunto = inputAssunto.value 
    let mensagem = inputMensagem.value
    

    if(nome === "" || email === "" || assunto === "" || mensagem === ""){
        mensagemErro.textContent = "Preencha todos os campos"
        mensagemErro.style.color = "#ff0000"
        // mensagemErro.classList.add("mensagemVermelha")
        // mensagemErro.setAttribute("scr", "link da img")
        // mensagemErro.src = "link"

        return
    }
    const cardusuario = document.createElement("div")
    cardusuario.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <h3> E=mail: ${email} </h3>
    <h3> Assunto: ${assunto} </h3>
    <h3> Mensagem: ${mensagem} </h3>
    `
    cadastro.append(cardusuario)
    form.reset()
})