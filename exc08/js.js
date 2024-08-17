let palavra = prompt("Digite seu texto");
let palindromo = '';


for (let analisador = palavra.length -1; analisador > -1; analisador--) {
    palindromo += palavra[analisador];     
}
if (palindromo == palavra) {
    alert(`A palavra ${palavra} é um palindromo`)
}else{
    alert(`Não é um palindromo`)
}

