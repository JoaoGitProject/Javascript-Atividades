
let opcao = '';

do {
    opcao = prompt(`Escolha uma das 5 opções:
        '1' - Nada.
        '2' - Nada.
        '3' - Nada.
        '4' - Nada.
        '5' - Encerrar programa.`);
        
        if (opcao >= 1 && opcao < 5) {
            alert(`Sua opção escolhida foi a número: ${opcao}`)
        }
    
    } while (opcao >= 1 && opcao < 5);
    if (opcao == '5') {
        alert("Programa encerrado.")
    }