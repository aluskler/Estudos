/*Robô da Tabuada
Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.
*/
/*
let numero = parseInt(
  prompt("Digite um número de 1 a 20 para calcular a tabuada:")
);
let resultados = "";

for (let i = 1; i <= 20; i++) {
  let numeroMultiplicado = numero * i;
  resultados += numeroMultiplicado + ", ";
}

alert(resultados.substring(0, resultados.length - 2));
*/

/* Procurando Palíndromos
Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda. */
/*
let palavra = prompt("Digite uma palavra: ");
let resultado = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  resultado += palavra[i];
}
if (resultado === palavra) {
  alert("A palavra " + palavra + " é um palíndromo.");
} else {
  alert(
    "A palavra " +
      palavra +
      " não é um palíndromo. A palavra lida de trás para frente é: " +
      resultado
  );
} */
