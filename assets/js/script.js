var perguntaAtual = 0;
var shadow = document.querySelector(".shadow")

function comecar() {
    montarPergunta()
    shadow.classList.remove("oculto")
    shadow.classList.add("fade-in")

    document.querySelector(".comecar").classList.add("oculto")
}

function montarPergunta() {
    var pergunta = document.querySelector(".pergunta")
    pergunta.textContent = perguntas[perguntaAtual].pergunta

    var alternativas = ["a", "b", "c", "d"]

    alternativas.forEach(alternativa => {
        let texto = perguntas[perguntaAtual].alternativas[alternativa]

        document.querySelector(`#${alternativa}`).value = texto
        document.querySelector(`label[for="${alternativa}"]`).textContent = texto
    })

    document.querySelector(".enviar-resposta").classList.remove("oculto")
    document.querySelector(".proxima-pergunta").classList.add("oculto")
}

document.querySelector("#formulario").addEventListener("submit", evento => {
    evento.preventDefault();

    let resposta = document.querySelector('input[name="alternativa"]:checked')
    console.log(resposta.id)
    let respostaCorreta = perguntas[perguntaAtual].resposta
    console.log(respostaCorreta)

    if (resposta.id === respostaCorreta) {
        alert("Certa resposta!")
        document.querySelector(".enviar-resposta").classList.add("oculto")
        document.querySelector(".proxima-pergunta").classList.remove("oculto")
    } else {
        alert("Eroooooooooou!")
    }
})

function proximaPergunta() {
    perguntaAtual++
    shadow.classList.remove("fade-in")
    shadow.classList.add("fade-out")
    setTimeout(() => {
        montarPergunta()
        shadow.classList.add("fade-in")
        shadow.classList.remove("fade-out")
    }, 1000)
}