const perguntas = [
  {
    pergunta: "Qual é a função do diafragma na técnica vocal?",
    respostas: [
      "Ajudar na articulação das palavras.",
      "Controlar a respiração e oferecer suporte para a voz.",
      "Aumentar o volume da voz.",
      "Produzir ressonância nas notas mais altas.",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o vibrato na técnica vocal?",
    respostas: [
      "Um tipo de exercício para aquecimento vocal.",
      "Um registro vocal específico.",
      "Uma técnica de respiração para notas sustentadas.",
      "Uma oscilação controlada na frequência da voz.",
    ],
    correta: 3
  },
  {
    pergunta: "Qual é a importância do aquecimento vocal?",
    respostas: [
      "Aumentar o volume da voz.",
      "Prevenir lesões nas cordas vocais.",
      "Ajudar na modulação da voz.",
      "Controlar a respiração durante a performance.",
    ],
    correta: 1
  },
  {
    pergunta: "O que é falsete na técnica vocal?",
    respostas: [
      "Um tipo de escala musical.",
      "Um termo técnico para falhas na performance vocal.",
      "Um registro vocal mais agudo e leve.",
      "Um tipo de exercício para expandir o alcance vocal.",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do apoio diafragmático na técnica vocal?",
    respostas: [
      "Produzir um som mais agudo.",
      "Ajudar a controlar a respiração e fornecer sustentação para a voz.",
      "Aumentar a ressonância vocal.",
      "Melhorar a dicção durante a performance.",
    ],
    correta: 1
  },
  {
    pergunta: "O que é articulação na técnica vocal?",
    respostas: [
      "O processo de aquecer as cordas vocais antes da performance.",
      "A habilidade de cantar em vários idiomas.",
      "A clareza e precisão na pronúncia das palavras durante a performance.",
      "Um tipo de exercício para aumentar a flexibilidade vocal.",
    ],
    correta: 2
  },
  {
    pergunta: "O que é ressonância na técnica vocal?",
    respostas: [
      "A capacidade de projetar a voz sem amplificação.",
      "Um tipo de técnica de respiração.",
      "A habilidade de cantar notas muito baixas.",
      "A amplificação natural do som vocal pelas cavidades de ressonância.",
    ],
    correta: 3
  },
  {
    pergunta: "O que é registro vocal na técnica vocal?",
    respostas: [
      "A documentação do histórico vocal de um cantor.",
      "A amplitude de notas que um cantor pode atingir.",
      "Um tipo de treinamento vocal intensivo.",
      "As diferentes áreas da voz em que a ressonância é sentida.",
    ],
    correta: 3
  },
  {
    pergunta: "O que é projeção vocal?",
    respostas: [
      "A capacidade de cantar sem microfone em um ambiente amplo.",
      "Um tipo de treinamento para ampliar o alcance vocal.",
      "A técnica de respiração para notas mais altas.",
      "A capacidade de cantar em várias línguas.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a importância do descanso vocal?",
    respostas: [
      "Manter a voz em um tom baixo durante o repouso.",
      "Evitar o uso da voz em todas as circunstâncias.",
      "Recuperar as cordas vocais após períodos de uso intenso.",
      "Praticar técnicas de respiração profunda.",
    ],
    correta: 2
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
  