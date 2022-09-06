let idade = prompt("qual a sua idade?");
let isMaiorIdade = prompt("você terminou o ensino médio? SIM ou NÃO");
let isCursandoOutraFaculdade = prompt(
  "você está cursando alguma faculdade? SIM ou NÃO"
);

if (idade >= 18) {
  console.log("é maior de idade: " + idade);
} else if (idade <= 17) {
  console.log("não é maior de idade");
} else {
  console.log("dado inválido");
}

if (isMaiorIdade == "SIM") {
  console.log("terminou o ensino médio");
} else if (isMaiorIdade == "NÃO") {
  console.log("ainda não terminou o ensino médio");
} else {
  console.log("dado inválido");
}

if (isCursandoOutraFaculdade == "NÃO") {
  console.log("não está cursando faculdade");
} else if (isCursandoOutraFaculdade == "SIM") {
  console.log("está cursando faculdade");
} else {
  console.log("dado inválido");
}
