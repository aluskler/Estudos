/*Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */

// function areas(base, altura) {
//   const resultado = (base * altura) / 2;
//   const resultado2 = (base * altura) / 2;

//   return { resultado, resultado2 };
// }

// console.log(areas(15, 20)["resultado"]);

function areaDoTriangulo() {
  const base = parseFloat(prompt("Qual é a base do trigulo ? "));
  const altura = parseFloat(prompt("Qual é a altura do trigulo ? "));
  const resultado = (base * altura) / 2;
  return `Area do triangulo: ${resultado}`;
}
function areaDoRetangulo() {
  const base = parseFloat(prompt("Qual é a base do trigulo ? "));
  const altura = parseFloat(prompt("Qual é a altura do trigulo ? "));
  const resultado = base * altura;
  return `Area do retangulo: ${resultado}`;
}
function areaDoQuadrado() {
  const lado = parseFloat(prompt("Valor do lado: "));
  const resultado = lado * lado;
  return `Area do quadrado ${resultado}`;
}
function areaDoTrapezio() {
  const baseMaior = parseFloat(prompt("Valor da base Maior : "));
  const baseMenor = parseFloat(prompt("Valor da base Menor : "));
  const altura = parseFloat(prompt("Valor da altura: "));
  const resultado = ((baseMaior + baseMenor) * altura) / 2;
  return `Area do trapezio ${resultado}`;
}

function areaDoCirculo() {
  const raio = parseFloat(prompt("Valor do raio: "));
  const resultado = 3.14 * (raio * raio);
  return `Area do circulo ${resultado}`;
}

function exibirMenu() {
  return parseInt(
    prompt(
      "1) área do triângulo \n2) área do retângulo \n3) área do quadrado \n4) área do trapézio \n5) área do círculo \n6) Sair"
    )
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case 1:
        alert(areaDoTriangulo());
        break;
      case 2:
        alert(areaDoRetangulo());
        break;
      case 3:
        alert(areaDoQuadrado());
        break;
      case 4:
        alert(areaDoTrapezio());
        break;
      case 5:
        alert(areaDoCirculo());
        break;
      case 6:
        alert("Saindo...");
        break;
      default:
        alert("Digite um valor valido");
        break;
    }
  } while (opcao != 6);
}
executar();
