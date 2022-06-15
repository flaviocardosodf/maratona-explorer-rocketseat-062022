const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector ("#buttonPerguntar")
const respostas = [
  "Certeza",
  "Não tenho tanta certeza",
  "É decididamente assim",
  "Não conte com isso",
  "Sem dúvidas",
  "Pergunte novamente mais tarde",
  "Sim, definitivamente",
  "Minha resposta é não",
  "Você pode contar com isso",
  "Melhor não te dizer agora",
  "A meu ver sim",
  "Minhas fontes dizem que sim",
  "Provavelmente",
  "Não é possível prever agora",
  "Perspectiva boa",
  "As expectativas não são tão boas",
  "Sim",
  "Concentre-se e pergunte novamente",
  "Sinais apontam que sim",
]

function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert ("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute ("disable", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"
   
  const totalRespostas = respostas.length
  const numAleatorio = Math.floor(Math.random() * totalRespostas)

  console.log(respostas[numAleatorio])
elementoResposta.innerHTML = pergunta + respostas[numAleatorio]

elementoResposta.style = 1;

setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute ("disable")
}, 3000)
}