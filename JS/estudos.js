/* Variáveis e Tipos de Dados
console.log("hello world");

const nome = "Lucas";
let idade = 25;
let peso = 70.5;
const altura = 1.75;
let Ativo = true;
*/

/* Operadores Aritméticos
const saida = "Javascript".length + 2 * 8
console.log(saida);

let testeDeOperador = 10;
testeDeOperador *= 2;
console.log(testeDeOperador);
*/

/*  Recursos nativos + While
window.alert("Seja bem vindo invocador!");
let nomeDeUsuario = prompt("Me diga, Qual é o seu nome?");

let confirmacao;

while (!confirmacao) {
  confirmacao = confirm("Seu nome é " + nomeDeUsuario + "?");
  if (confirmacao) {
    alert("Seja bem vindo " + nomeDeUsuario + "!");
  } else {
    alert("Me diga novamente seu nome!");
    nomeDeUsuario = prompt("Me diga, Qual é o seu nome?");
  }
}
console.log(nomeDeUsuario); */

/* Recursos nativos + Do While
let nomeDeUsuario;
let confirmacao;
alert("Seja bem vindo invocador!");
do {
  nomeDeUsuario = prompt("Me diga, Qual é o seu nome?");
  confirmacao = confirm("Seu nome é " + nomeDeUsuario + "?");
  if (confirmacao) {
    alert("Seja bem vindo " + nomeDeUsuario + "!");
  } else {
    alert("Me diga novamente seu nome!");
  }
} while (!confirmacao);
console.log(nomeDeUsuario);
*/
