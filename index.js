const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "let myVar = 10;",
      "variable myVar = 10;",
      "const myVar = 10;",
    ],
    correta: 2
  },
  {
    pergunta: "O que o método 'console.log()' faz?",
    respostas: [
      "Exibe uma mensagem de alerta na tela.",
      "Imprime dados no console do navegador.",
      "Define uma variável no escopo global.",
    ],
    correta: 1
  },
  {
    pergunta: "Como se refere a um elemento HTML usando JavaScript?",
    respostas: [
      "document.getElementById('myElement');",
      "element.querySelector('myElement');",
      "$('myElement');",
    ],
    correta: 0
  },
  {
    pergunta: "Qual operador é usado para comparar igualdade em valor e tipo?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Data Object Model",
      "Document Object Model",
      "Dynamic Object Management",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a finalidade do método 'addEventListener()' em JavaScript?",
    respostas: [
      "Adicionar uma classe a um elemento.",
      "Anexar um evento a um elemento HTML.",
      "Criar uma nova função.",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "'let' é usado para variáveis que não podem ser reatribuídas, enquanto 'const' pode ser.",
      "'const' é usado para variáveis que não podem ser reatribuídas, enquanto 'let' pode ser.",
      "Não há diferença entre 'let' e 'const' na declaração de variáveis.",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o operador ternário em JavaScript?",
    respostas: [
      "Um operador lógico que nega uma expressão.",
      "Um operador que verifica se uma variável é do tipo string.",
      "Um operador condicional que retorna um valor com base em uma condição.",
    ],
    correta: 2
  },
  {
    pergunta: "Como se chama a estrutura de controle que permite a execução repetida de um bloco de código?",
    respostas: [
      "if statement",
      "for loop",
      "switch case",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
    respostas: [
      "A capacidade de elevar um elemento HTML na árvore DOM.",
      "O comportamento em que as declarações de variáveis e funções são movidas para o topo do seu escopo durante a fase de compilação.",
      "A habilidade de criar variáveis dentro de uma função sem declará-las.",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas



for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }



    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()



  quiz.appendChild(quizItem)
}

