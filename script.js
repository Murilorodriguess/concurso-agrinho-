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
