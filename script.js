// MENU MOBILE

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// RASTREAMENTO

function buscarLote(){

  const lote = document.getElementById("lote").value;
  const resultado = document.getElementById("resultado");

  if(lote === ""){
    resultado.innerHTML = "Digite um número de lote.";
    resultado.style.color = "red";
    return;
  }

  resultado.style.color = "#0d3b1e";

  resultado.innerHTML = `
    Lote ${lote} localizado ✅ <br><br>

    Fazenda: Agro Verde Sustentável <br>
    Região: Paraná - Brasil <br>
    Produção: Livre de desperdício hídrico <br>
    Emissão de carbono reduzida em 35%
  `;
}

// FORMULÁRIO

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Mensagem enviada com sucesso!");

  form.reset();

});
function respostaCorreta(){

    document.getElementById("quizResultado").innerHTML =
    "✅ Correto! O plantio direto ajuda a conservar o solo.";

}

function respostaErrada(){

    document.getElementById("quizResultado").innerHTML =
    "❌ Resposta incorreta.";

}
function respostaCorreta(){

    document.getElementById("quizResultado").innerHTML =
    "✅ Correto! O plantio direto ajuda a conservar o solo.";

}

function respostaErrada(){

    document.getElementById("quizResultado").innerHTML =
    "❌ Resposta incorreta.";

} 
function buscarLote(){

    const lote = document.getElementById("lote").value;
    const resultado = document.getElementById("resultado");

    if(lote === ""){

        resultado.innerHTML =
        "<span style='color:red'>Digite um lote.</span>";

        return;
    }

    resultado.innerHTML = `

    <div class="lote-card">

        <h3>Lote ${lote} ✅</h3>

        <p><strong>Fazenda:</strong> Agro Verde Sustentável</p>

        <p><strong>Localização:</strong> Paraná - Brasil</p>

        <p><strong>Plantio:</strong> 12/03/2026</p>

        <p><strong>Colheita:</strong> 28/07/2026</p>

        <p><strong>Certificação:</strong> Produção Sustentável</p>

        <p><strong>Economia de água:</strong> 30%</p>

        <p><strong>Redução de carbono:</strong> 35%</p>

        <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=Lote-${lote}"
        alt="QR Code">

    </div>

    `;
}
// QUIZ

function quizCorreto(){

    document.getElementById("quizResultado").innerHTML =
    "✅ Resposta correta! O plantio direto protege o solo.";

}

function quizErrado(){

    document.getElementById("quizResultado").innerHTML =
    "❌ Resposta incorreta.";

}

// CONTADORES

const contadores =
document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const atualizar = () => {

        const alvo =
        +contador.getAttribute("data-target");

        const atual =
        +contador.innerText;

        const incremento =
        alvo / 100;

        if(atual < alvo){

            contador.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar,20);

        }else{

            contador.innerText = alvo;

        }

    };

    atualizar();

}); 
const perguntas = [
{
    pergunta: "Qual prática ajuda a reduzir a erosão do solo?",
    alternativas: [
        "Plantio Direto",
        "Queimadas",
        "Desmatamento",
        "Uso excessivo de agrotóxicos"
    ],
    correta: 0
},
{
    pergunta: "O que é agricultura de precisão?",
    alternativas: [
        "Plantar apenas manualmente",
        "Utilizar tecnologia para melhorar a produção",
        "Produzir sem planejamento",
        "Aumentar o desperdício de água"
    ],
    correta: 1
},
{
    pergunta: "Qual destas ações contribui para a sustentabilidade?",
    alternativas: [
        "Desmatamento",
        "Desperdício de água",
        "Rotação de culturas",
        "Queimadas frequentes"
    ],
    correta: 2
},
{
    pergunta: "Os bioinsumos são utilizados para:",
    alternativas: [
        "Substituir práticas sustentáveis",
        "Aumentar a poluição",
        "Auxiliar no controle biológico e fertilização",
        "Eliminar a necessidade de planejamento"
    ],
    correta: 2
},
{
    pergunta: "A rastreabilidade permite:",
    alternativas: [
        "Conhecer a origem do produto",
        "Aumentar desperdícios",
        "Ocultar informações do consumidor",
        "Reduzir a qualidade dos alimentos"
    ],
    correta: 0
}
];

let perguntaAtual = 0;
let pontuacao = 0;

const perguntaElemento =
document.getElementById("pergunta");

const alternativasElemento =
document.getElementById("alternativas");

const resultadoQuiz =
document.getElementById("resultadoQuiz");

const proximaBtn =
document.getElementById("proximaBtn");

function carregarPergunta(){

    const atual = perguntas[perguntaAtual];

    perguntaElemento.innerHTML =
    `${perguntaAtual + 1}. ${atual.pergunta}`;

    alternativasElemento.innerHTML = "";

    atual.alternativas.forEach((alternativa,index)=>{

        const botao =
        document.createElement("button");

        botao.innerText = alternativa;

        botao.classList.add("alternativa");

        botao.onclick = () =>
        verificarResposta(index);

        alternativasElemento.appendChild(botao);

    });

    proximaBtn.style.display = "none";
}

function verificarResposta(indice){

    const atual = perguntas[perguntaAtual];

    const botoes =
    document.querySelectorAll(".alternativa");

    botoes.forEach(btn => btn.disabled = true);

    if(indice === atual.correta){

        pontuacao++;

        botoes[indice].classList.add("correta");

    }else{

        botoes[indice].classList.add("errada");

        botoes[atual.correta]
        .classList.add("correta");
    }

    proximaBtn.style.display = "inline-block";
}

function proximaPergunta(){

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarPergunta();

    }else{

        mostrarResultado();
    }
}

function mostrarResultado(){

    let mensagem = "";

    if(pontuacao === 5){

        mensagem =
        "🏆 Excelente! Você domina o tema da agricultura sustentável.";

    }else if(pontuacao >= 3){

        mensagem =
        "🌱 Muito bem! Você possui bons conhecimentos sobre sustentabilidade.";

    }else{

        mensagem =
        "📚 Continue estudando para aprender mais sobre o tema.";
    }

    document.getElementById("quiz-container").innerHTML = `
        <h2>Resultado Final</h2>
        <h3>${pontuacao} de ${perguntas.length} acertos</h3>
        <p>${mensagem}</p>
        <button onclick="location.reload()">
            Refazer Quiz
        </button>
    `;
}

carregarPergunta();
// Seleciona o botão de alternar tema
const botaoDarkMode = document.getElementById('toggle-darkmode');

// Verifica se o usuário já tinha uma preferência salva anteriormente
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
    document.documentElement.setAttribute('data-theme', temaSalvo);
    if (temaSalvo === 'dark') {
        botaoDarkMode.textContent = "☀️ Modo Claro";
    }
}

// Adiciona evento de clique para mudar o tema
botaoDarkMode.addEventListener('click', () => {
    let temaAtual = document.documentElement.getAttribute('data-theme');
    
    if (temaAtual === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('tema', 'light');
        botaoDarkMode.textContent = "🌓 Modo Escuro";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('tema', 'dark');
        botaoDarkMode.textContent = "☀️ Modo Claro";
    }
});

// Função para rolar a página suavemente até o topo
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animação simples de entrada ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(20px)";
        heroContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        
        setTimeout(() => {
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 200);
    }
});
