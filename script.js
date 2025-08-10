const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "um jovem órfão que descobre ser um bruxo e é convidado a estudar na Escola de Magia e Bruxaria de Hogwarts. Lá, ele faz amigos, aprende magia e enfrenta desafios, incluindo a ameaça do bruxo das trevas Lord Voldemort, que assassinou seus pais e busca poder absoluto. isso é?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Ficou assustado com a história de Harry. "
            },
            {
                texto: "Isso é deprimente!",
                afirmacao: "Fudeu com o psicológico de Harry"
            }
        ]
    },
    
    {
        questão1: "Quem levou o Harry para a casa dos tios?",
        alternativas: [
            {
                texto: "Hagrid e Dumbledore",
                afirmacao: "Guardião dos portões de hogwarts e diretor da escola"
            },
            {
                texto: "Dumbledore e Minerva",
                afirmacao: "Diretor da escola e professora de transfiguração"
            }
        ]
    },
    {
        questão2: "Quem deu a motocicleta que leva Harry para a casa dos tios?",
        alternativas: [
            {
                texto: "Arthur Weasley",
                afirmacao: "pai de Rony Weasley"
            },
            {
                texto: "Sirius Black",
                afirmacao: "Padrinho de Harry"
            }   
        ]
    },
    {
        questão3: "Quem foi que instruiu Harry a passa pela plataforma 9 e 10 para chegar a plataforma 9¾?",
        alternativas: [
            {
                texto: "Lucius Malfoy",
                afirmacao: "Pai de Draco, comensal da morte"
            },
            {
                texto: "Molly Weasley",
                afirmacao: "Mãe do Rony"
            }
        ]
    },
    {
        questão4: "Quais são os nomes dos amigos de Harry?",
        alternativas: [
            {
                texto: "Luna e Neville",
                afirmacao: "Luna só aparece no 5 livro e Neville só faz algumas aparições"
            },
            {
                texto: "Rony e Hermione",
                afirmacao: "resposta correta "
            },
            
        ]
    },
    {
    questão5: "Quem é o professor de História da magia?",
        alternativas: [
            {
                texto: "Professor Cuthbert Binns",
                afirmacao: "ele é um fantasma e ninguém presta atenção"
            },
            {
                texto: "Professor Oracio Slugorhn",
                afirmacao: "ele é o professor de poções que substitui o Snape "
            },
        ]
    },
    {
    questão6: "quem é o professor de poções?",
        alternativas: [
            {
                texto: "Professor Severus Snape",
                afirmacao: "professor de poções e artes das trevas"
            },
            {
                texto: "Professora Minerva Mcgonagall",
                afirmacao: "professora de transfiguração "
            },
        ]
    },
    {
    questão7: "Quem Harry desconfiava que tinha entrado na ala oeste?",
        alternativas: [
            {
                texto: "Professor Quirrel",
                afirmacao: "Harry o achava fraco"
            },
            {
                texto: "Professora Snape",
                afirmacao: "viu ele mancando e sua perna tinha sangue "
            },
        ]
    },
    {
    questão8: "Por que Harry foi para a floresta proibida?",
        alternativas: [
            {
                texto: " porque ele gosta do perigo, e é o menino que sobreviveu",
                afirmacao: "nem sabia que existia magia até agora"
            },
            {
                texto: "Estava de detenção por não estar no dormitório na hora certa",
                afirmacao: "resposta correta, estava na casa de Hagrid"
            },
        ]
    },
    {
    questão9: "Qual é o nome da coruja do Harry?",
        alternativas: [
            {
                texto: "Edwiges",
                afirmacao: "resposta correta, foi dada pelo Hagrid"
            },
            {
                texto: "Adônis",
                afirmacao: "resposta incorreta, nunca leu os livros? "
            },
        ]
    },
    {
    questão10: "Com quem o Harry conversou no zoológico?",
        alternativas: [
            {
                texto: "Cobra",
                afirmacao: "resposta correta, é uma das primeiras cenas que aparece"
            },
            {
                texto: "Dursley",
                afirmacao: "resposta incorreta, além de nunca ter lido os livros, nunca viu os filmes "
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function mostraResultado() {
   function checar() {
  

  var questao1 = document.quiz.questao1.value;
  var questao2 = document.quiz.questao2.value;
  var questao3 = document.quiz.questao3.value;
  var questao4 = document.quiz.questao4.value;
  var questao5 = document.quiz.questao5.value;
  var questao6 = document.quiz.questao6.value;
  var questao7 = document.quiz.questao7.value;
  var questao8 = document.quiz.questao8.value;
  var questao9 = document.quiz.questao9.value;
  var questao10 = document.quiz.questao10.value;

  var correto = 0;


  if (questao1 == "Hagrid e Dumbludore") {
    correto++;
  }
  if (questao2 == "Sirius Black") {
    correto++;
  }
  if (questao3 == "Molly Weasley") {
    correto++;
  }
  if (questao4 == "Rony e Hermione") {
    correto++;
  }
  if (questao5 == "Professor Cuthbert Binns") {
    correto++;
  }
  if (questao6 == "Severus Snape") {
    correto++;
  }
  if (questao7 == "Professor Snape") {
    correto++;
  }
  if (questao8 == "Estava de detenção por não estar no dormitório na hora certa") {
    correto++;
  }
  if (questao9 == "Edwiges") {
    correto++;
  }
  if (questao10 == "cobra") {
    correto++;
  }


  var imagens = ["img/ganhar.gif", "img/maisoumenos.gif", "img/perdeu.gif"];
  var mensagens = ["Mandou bem!", "É...melhor tentar de novo!", "Tente novamente!"];
  var pontos;

  if (correto == 0) {
    pontos = 2;
  }

  if (correto > 0 && correto < 10) {
    pontos = 1;
  }

  if (correto == 10) {
    pontos = 0;
  }

  document.getElementById("enviar").style.visibility = "visible";

  document.getElementById("mensagem").innerHTML = mensagens[pontos];

  document.getElementById("num_correto").innerHTML = "Você tem " + correto + " correto.";

  document.getElementById("imagem").src = imagens[pontos];
}
}