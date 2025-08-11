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
                
            },
            {
                texto: "Isso é deprimente!",
                
            }
        ]
    },
    {
        enunciado: "Quem levou o Harry para a casa dos tios?",
        alternativas: [
            {
                texto: "Hagrid e Dumbledore",
                correta: true
            },
            {
                texto: "Dumbledore e Minerva",
                correta: false
            }
        ]
    },
    {
   enunciado: "Quem deu a motocicleta que leva Harry para a casa dos tios?",
    alternativas: [
        {
            texto: "Arthur Weasley",
            correta: false
        },
        {
            texto: "Sirius Black",
            correta: true
        }   
    ]
},
{
    enunciado: "Quem foi que instruiu Harry a passa pela plataforma 9 e 10 para chegar a plataforma 9¾?",
    alternativas: [
        {
            texto: "Lucius Malfoy",
            correta: false
        },
        {
            texto: "Molly Weasley",
            correta: true
        }
    ]
},
{
    enunciado: "Quais são os nomes dos amigos de Harry?",
    alternativas: [
        {
            texto: "Luna e Neville",
            correta: false
        },
        {
            texto: "Rony e Hermione",
            correta: true
        },
        
    ]
},
{
enunciado: "Quem é o professor de História da magia?",
    alternativas: [
        {
            texto: "Professor Cuthbert Binns",
            correta: true
        },
        {
            texto: "Professor Oracio Slugorhn",
            correta: false
        },
    ]
},
{
enunciado: "quem é o professor de poções?",
    alternativas: [
        {
            texto: "Professor Severus Snape",
            correta: true
        },
        {
            texto: "Professora Minerva Mcgonagall",
            correta: false
        },
    ]
},
{
enunciado: "Quem Harry desconfiava que tinha entrado na ala oeste?",
    alternativas: [
        {
            texto: "Professor Quirrel",
            correta: false
        },
        {
            texto: "Professora Snape",
            correta: true
        },
    ]
},
{
enunciado: "Por que Harry foi para a floresta proibida?",
    alternativas: [
        {
            texto: " porque ele gosta do perigo, e é o menino que sobreviveu",
            correta: false
        },
        {
            texto: "Estava de detenção por não estar no dormitório na hora certa",
            correta: true
        },
    ]
},
{
enunciado: "Qual é o nome da coruja do Harry?",
    alternativas: [
        {
            texto: "Edwiges",
            correta: true
        },
        {
            texto: "Adônis",
            correta: false
        },
    ]
},
{
enunciado: "Com quem o Harry conversou no zoológico?",
    alternativas: [
        {
            texto: "Cobra",
            correta: true
        },
        {
            texto: "Dursley",
            correta: false
        },
    ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let acertos = 0; // Variável para contar acertos

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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    // Verifica se a resposta está correta
    if (opcaoSelecionada.correta) {
        acertos++; // Incrementa a contagem de acertos
    }
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal + ` Você acertou ${acertos} de ${10} perguntas.`;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
