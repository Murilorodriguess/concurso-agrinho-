/* CONTADORES */
const counters = document.querySelectorAll('.numero');
counters.forEach(counter => {
const updateCounter = () => {
    const target = Number(counter.dataset.target);
    const current = Number(counter.innerText);
    const increment = target / 100;
    if(current < target){
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter,20);
    } else {
        counter.innerText = target;
    }
};
updateCounter();
});

/* GRÁFICO DE PRODUÇÃO AGRÍCOLA */
const ctx = document.getElementById('graficoProducao');
new Chart(ctx,{
type:'bar',
data:{
    labels:['Soja','Milho','Trigo','Feijão','Cana'],
    datasets:[{
        label:'Produção (milhões t)',
        data:[22,15,3,1,35],
        backgroundColor:['#2E7D32','#43A047','#66BB6A','#81C784','#A5D6A7']
    }]
},
options:{
    responsive:true,
    plugins:{legend:{display:false}},
    scales:{y:{beginAtZero:true}}
}
});

/* CURIOSIDADES */
const curiosidades = [
"Paraná é líder nacional na produção de frango.",
"O Porto de Paranaguá é um dos principais exportadores de grãos do Brasil.",
"A soja é uma das culturas mais importantes do estado.",
"O Paraná possui forte presença de cooperativas agrícolas.",
"O estado é referência em agricultura de precisão."
];
let indice = 0;
const textoCuriosidade = document.getElementById('curiosidade');
document.getElementById('btnCuriosidade').addEventListener('click', () => {
indice++;
if(indice >= curiosidades.length) indice = 0;
textoCuriosidade.textContent = curiosidades[indice];
});

/* MAPA INTERATIVO */
const infoRegiao = document.getElementById('info-regiao');

const regioes = {
'londrina':'Londrina: Soja e milho dominam a região.',
'maringa':'Maringá: Destaca-se em frango e suínos.',
'cascavel':'Cascavel: Forte em milho e trigo.',
'toledo':'Toledo: Referência em cooperativas agrícolas.',
'curitiba':'Curitiba: Centro administrativo e agroindustrial.'
};

Object.keys(regioes).forEach(id=>{
const el = document.getElementById(id);
el.addEventListener('mouseenter',()=>{ infoRegiao.textContent = regioes[id]; el.setAttribute('fill','#FFE082'); });
el.addEventListener('mouseleave',()=>{ infoRegiao.textContent='Passe o mouse sobre uma região'; 
if(id==='londrina') el.setAttribute('fill','#66BB6A');
if(id==='maringa') el.setAttribute('fill','#43A047');
if(id==='cascavel') el.setAttribute('fill','#2E7D32');
if(id==='toledo') el.setAttribute('fill','#1B5E20');
if(id==='curitiba') el.setAttribute('fill','#81C784');
});
});
