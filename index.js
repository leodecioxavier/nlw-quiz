const perguntas = [
  {
    pergunta: "Qual é a função das cordas vocais?",
    respostas: [
      "A. Produzir ar",
      "B. Filtrar o som",
      "C. Produzir som",
      "D. Regular a temperatura da voz",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o vibrato na técnica vocal?",
    respostas: [
      "A. Uma técnica para projetar a voz",
      "B. Uma técnica para controlar a respiração",
      "C. Uma oscilação de pitch na voz",
      "D. Uma técnica de aquecimento vocal",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a importância da respiração na técnica vocal?",
    respostas: [
      "A. Controlar a temperatura da voz",
      "B. Melhorar a postura",
      "C. Produzir som de forma saudável e controlada",
      "D. Aumentar a ressonância vocal",
    ],
    correta: 2
  },
  {
    pergunta: "O que é falsete na técnica vocal?",
    respostas: [
      "A. Uma técnica para alcançar notas graves",
      "B. Uma técnica para alcançar notas agudas",
      "C. Uma técnica para projeção vocal",
      "D. Uma técnica para respiração profunda",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a tessitura vocal?",
    respostas: [
      "A. O alcance vocal de uma pessoa",
      "B. A projeção vocal em um espaço amplo",
      "C. A técnica de vibrato",
      "D. O controle do volume da voz",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um belting na técnica vocal?",
    respostas: [
      "A. Uma técnica para respiração diafragmática",
      "B. Uma técnica para cantar notas longas",
      "C. Uma técnica para cantar notas curtas com volume alto",
      "D. Uma técnica para alcançar notas graves",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o registro vocal de peito na técnica vocal?",
    respostas: [
      "A. Um registro para alcançar notas agudas",
      "B. Um registro para notas graves",
      "C. Um registro para respiração controlada",
      "D. Um registro para projeção vocal",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a importância do aquecimento vocal antes de cantar?",
    respostas: [
      "A. Evitar a desidratação",
      "B. Prevenir lesões nas cordas vocais",
      "C. Aumentar a potência vocal",
      "D. Regular a temperatura corporal",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o vibrato na técnica vocal?",
    respostas: [
      "A. Uma técnica para projetar a voz",
      "B. Uma técnica para controlar a respiração",
      "C. Uma oscilação de pitch na voz",
      "D. Uma técnica de aquecimento vocal",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um bel canto na técnica vocal?",
    respostas: [
      "A. Uma técnica para respiração profunda",
      "B. Uma técnica para alcançar notas longas",
      "C. Uma técnica para cantar com expressividade e beleza",
      "D. Uma técnica para respiração controlada",
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
  