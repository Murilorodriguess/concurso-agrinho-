// MENU MOBILE
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
});

// =========================
// RASTREAMENTO
// =========================

function buscarLote(){

const lote = document.getElementById("lote").value;
const resultado = document.getElementById("resultado");

if(!lote){
resultado.innerHTML = "Digite um lote.";
return;
}

resultado.innerHTML = `
<div class="lote-card">
<h3>Lote ${lote} ✔</h3>
<p>Fazenda: Agro Sustentável</p>
<p>Local: Paraná - Brasil</p>
<p>Produção: Sustentável</p>
<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${lote}">
</div>
`;
}

// =========================
// QUIZ
// =========================

const perguntas = [
{
pergunta:"Qual prática preserva o solo?",
alternativas:["Plantio Direto","Queimadas","Desmatamento"],
correta:0
},
{
pergunta:"O que é agricultura sustentável?",
alternativas:[
"Produção sem cuidado",
"Uso equilibrado de recursos",
"Desmatamento"
],
correta:1
}
];

let atual = 0;
let pontos = 0;

function carregarPergunta(){

const p = perguntas[atual];

document.getElementById("pergunta").innerText = p.pergunta;

const area = document.getElementById("alternativas");

area.innerHTML = "";

p.alternativas.forEach((alt,i)=>{

const btn = document.createElement("button");
btn.innerText = alt;
btn.classList.add("alternativa");

btn.onclick = () => {

if(i === p.correta){
pontos++;
btn.classList.add("correta");
}else{
btn.classList.add("errada");
}

setTimeout(() => {
atual++;

if(atual < perguntas.length){
carregarPergunta();
}else{
document.getElementById("quiz-container").innerHTML =
`<h2>Fim do Quiz</h2><p>Pontos: ${pontos}/${perguntas.length}</p>`;
}
},1000);

};

area.appendChild(btn);

});
}

carregarPergunta();

// =========================
// CONTADOR ANIMADO
// =========================

const counters = document.querySelectorAll(".contador");

counters.forEach(counter => {

counter.innerText = "0";

const update = () => {

const target = +counter.getAttribute("data-target");
const value = +counter.innerText;

const inc = target / 50;

if(value < target){
counter.innerText = Math.ceil(value + inc);
setTimeout(update,30);
}else{
counter.innerText = target;
}

};

update();

});
