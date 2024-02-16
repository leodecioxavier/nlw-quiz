const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade, sem verificar o tipo.",
        "Compara dois valores para igualdade, verificando o tipo.",
        "Atribui um valor a uma variável.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método correto para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "array.add(element)",
        "array.push(element)",
        "array.insert(element)",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array e executa uma função em cada elemento.",
        "Filtra os elementos de um array com base em uma função de teste.",
        "Retorna o primeiro elemento de um array que satisfaz a função de teste.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      respostas: [
        "!",
        "&",
        "|",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "array.pop()",
        "array.removeLast()",
        "array.splice(-1)",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Operador de adição",
        "Operador de multiplicação",
        "Operador lógico 'E' (AND)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de linha em JavaScript?",
      respostas: [
        "// Comentário",
        "' Comentário",
        "* Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'forEach()' faz em JavaScript?",
      respostas: [
        "Executa uma função uma vez para cada elemento do array.",
        "Filtra os elementos de um array com base em uma função de teste.",
        "Retorna true se pelo menos um elemento do array satisfaz a função de teste.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro.",
        "Converte um número inteiro em uma string.",
        "Retorna o valor absoluto de um número.",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)        
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  