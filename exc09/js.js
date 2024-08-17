let numero = prompt("Digite seu número");
let calculo = '';
let resultados = '';

for (let multiplicador = 1; multiplicador <= 20; multiplicador++) {

     calculo = numero * multiplicador;
    resultados = resultados + ", " + calculo;
    console.log(resultados)
    
}

alert(resultados)