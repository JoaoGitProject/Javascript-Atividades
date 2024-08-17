let nome = prompt("Qual seu nome?");
let visitou = prompt("Já visitou algum cidade? 'Sim/Não'");
const todasAsCidades = [];
let cidadesVisitadas = '';

while (visitou == 'sim') {
    cidadesVisitadas = prompt("Qual cidade você visitou?")
    todasAsCidades.push(cidadesVisitadas);
    visitou = prompt("Já visitou algum cidade? 'Sim/Não'")
    console.log("Chegou aki?")

}
console.log(todasAsCidades)
//alert(`As cidades visitadas foram ${todasAsCidades}`);

