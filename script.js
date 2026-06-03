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
// SOM
const somCerto = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
const somErrado = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");

// PERGUNTAS (níveis)
const perguntas = [
{
p:"Qual prática preserva o solo?",
a:["Plantio Direto","Queimadas","Desmatamento"],
c:0
},
{
p:"O que reduz carbono?",
a:["Energia limpa","Fumaça","Fogo"],
c:0
},
{
p:"O que é sustentabilidade?",
a:["Uso consciente","Desperdício","Poluição"],
c:0
}
];

let i = 0;
let pontos = 0;
let nome = "";

// INICIAR
function iniciar(){
nome = document.getElementById("nome").value;
if(!nome) return alert("Digite seu nome!");

document.querySelector(".hero").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");

carregar();
}

// QUIZ
function carregar(){

const q = perguntas[i];
document.getElementById("pergunta").innerText = q.p;

const box = document.getElementById("alternativas");
box.innerHTML = "";

q.a.forEach((alt,index)=>{

const btn = document.createElement("button");
btn.innerText = alt;

btn.onclick = ()=>{

if(index === q.c){
pontos++;
somCerto.play();
}else{
somErrado.play();
}

i++;

if(i < perguntas.length){
carregar();
}else{
final();
}

};

box.appendChild(btn);

});
}

// FINAL
function final(){

document.getElementById("quiz").classList.add("hidden");
document.getElementById("resultado").classList.remove("hidden");

let nivel = "";

if(pontos === 3) nivel = "🥇 OURO";
else if(pontos === 2) nivel = "🥈 PRATA";
else nivel = "🥉 BRONZE";

// SALVAR RANKING
let ranking = JSON.parse(localStorage.getItem("ranking") || "[]");

ranking.push({nome, pontos});

localStorage.setItem("ranking", JSON.stringify(ranking));

// MOSTRAR
document.getElementById("resultado").innerHTML = `
<h1>Parabéns ${nome}</h1>
<h2>${pontos}/3</h2>
<h1>${nivel}</h1>
<button onclick="certificado()">Baixar Certificado</button>
`;

mostrarRanking();
}

// RANKING
function mostrarRanking(){

let ranking = JSON.parse(localStorage.getItem("ranking") || "[]");

let html = "";

ranking.forEach(r=>{
html += `<p>${r.nome} - ${r.pontos}</p>`;
});

document.getElementById("listaRanking").innerHTML = html;
}

mostrarRanking();

// GRÁFICO
new Chart(document.getElementById("grafico"),{
type:"bar",
data:{
labels:["Água","Carbono","Solo"],
datasets:[{
label:"Impacto %",
data:[30,35,80],
backgroundColor:"#7ed957"
}]
}
});

// CERTIFICADO
function certificado(){

const c = document.getElementById("certificado");
const ctx = c.getContext("2d");

c.width = 800;
c.height = 500;

ctx.fillStyle="#0d3b1e";
ctx.fillRect(0,0,c.width,c.height);

ctx.fillStyle="white";
ctx.font="30px Poppins";

ctx.fillText("CERTIFICADO AGRINHO",200,200);
ctx.fillText("Nome: "+nome,200,260);
ctx.fillText("Pontuação: "+pontos+"/3",200,320);

// DOWNLOAD
const link = document.createElement("a");
link.download="certificado.png";
link.href=c.toDataURL();
link.click();
}
