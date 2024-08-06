const primeiroValor = prompt("Digite o primeiro número");
const segundoValor = prompt("Digite o segundo número");

const x = parseFloat(primeiroValor)
const y = parseFloat(segundoValor)

let somaRes = x + y;
let subRes = x - y;
let multRes = x * y;
let divRes = x / y;

alert(
    `Resultados:
    Soma: ${somaRes}
    Subtração: ${subRes}
    Multiplicação: ${multRes}
    Divisão: ${divRes}`
)