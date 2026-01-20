const nome = prompt("Digite o nome: ");
const sobrenome = prompt("Digite seu sobrenome: ");
const campoDeEstudo = prompt("Digite seu campo de estudo: ");
const dataDeNascimento = prompt("Digite sua data de nascimento: ");
const idade =
  new Date().getFullYear() - new Date(dataDeNascimento).getFullYear();

alert(
  nome +
    " " +
    sobrenome +
    "\n" +
    "Estudante de : " +
    campoDeEstudo +
    "\n" +
    `Você tem ${idade} anos `
);

let Numero1 = parseFloat(prompt("Digite o primeiro número: "));
let Numero2 = parseFloat(prompt("Digite o segundo número: "));

let soma = Numero1 + Numero2;
let subtracao = Numero1 - Numero2;
let multiplicacao = Numero1 * Numero2;
let divisao = Numero1 / Numero2;