const perguntas = [ 
    {
    "pergunta": "Qual é a minha cor favorita?",
    "respostas": [
      "Preto",
      "Rosa",
      "Branco"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual é a minha estação do ano preferida?",
    "respostas": [
      "Verão",
      "Outono",
      "Inverno"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual é o meu animal favorito?",
    "respostas": [
      "Cachorro",
      "Gato",
      "Pássaro"
    ],
    "correta": 0
  },
  {
    "pergunta": "Qual é a minha comida favorita?",
    "respostas": [
      "Risoto",
      "Hambúrguer",
      "Sushi"
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual é a minha série favorita?",
    "respostas": [
      "Gossip Girl",
      "The bold type",
      "This is us"
    ],
    "correta": 2
  },
  {
    "pergunta": "Qual prato eu pediria para você fazer?",
    "respostas": [
      "Cogumelo e Missô",
      "Camarão e Coco",
      "Salmão e Maracujá"
    ],
    "correta": 2
  },
  {
    "pergunta": "Qual é o meu hobby favorito?",
    "respostas": [
      "Artes",
      "Gastronomia",
      "Esportes"
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual é a minha praia favorita?",
    "respostas": [
      "Rio de Janeiro",
      "Pipa",
      "São Miguel do Gostoso"
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual é o meu estilo de música favorito?",
    "respostas": [
      "MPB",
      "R&B",
      "Forró"
    ],
    "correta": 1
  },
  {
    "pergunta": "Qual é a minha sobremesa favorita?",
    "respostas": [
      "Brigadeiro",
      "Brownie com Sorvete",
      "Pudim"
    ],
    "correta": 1
  }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  //loop
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
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