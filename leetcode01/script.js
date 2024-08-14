let valor = prompt("Digite seu número");
let valorPalindrome = '';
for (let index = valor.length -1; index > -1; index--) {
    valorPalindrome = valorPalindrome + valor[index];
}
if (valorPalindrome === valor) {
    console.log(true)
}else
    {console.log(false)}