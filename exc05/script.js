let ValorM = prompt("Digite um valor em Metros");
let Vconversao = prompt(`As opções de conversão são:
milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)
Digite a sua escolha de acordo com o nome em parêntese
`);

switch (Vconversao) {
    case "mm":{
        alert(((ValorM * 10)*10)*10);
    }

        break;
    case "cm":
        {
            alert((ValorM * 10)*10);
        }
        break;
    case "dm":
        {
            alert(ValorM * 10);
        }
        break;
    case "dam":
        alert(ValorM / 10);
        break;
    case "hm":
        alert((ValorM / 10) / 10);
        break;
    case "km":
        alert(((ValorM / 10)/10)/10);
        break;

    default:
        break;
}