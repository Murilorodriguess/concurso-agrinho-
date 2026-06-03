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
