
var imc;
var sexo = prompt ('Digite teu sexo. Homem / Mulher');
var altura = prompt ("Digite tua altura");


switch (sexo)
{
    case "Homem":
        imc = (72.7*altura-58);
        console.log(imc);
        break;

    case "Mulher":
        imc = (62.1*altura-44.7);
        console.log(imc);
        break;
        
    default:
        console.log("Não foi possivel calcular o IMC, tente novamente.");
    break;
} 