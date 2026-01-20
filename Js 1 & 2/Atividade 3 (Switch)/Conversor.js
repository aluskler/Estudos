valorMetros = parseFloat(prompt("Digite o valor em metros: "));

opcao = parseInt(
  prompt(
    "Escolha a unidade de conversão: \n 1) Milimetro \n 2) Centimetro \n 3) Decimetro \n 4) Decametro \n 5) Hectometro \n 6) Quilometro"
  )
);

switch (opcao) {
  case 1:
    valorConversao = valorMetros * 1000;
    alert("Valor em milimetros: " + valorConversao);
    break;
  case 2:
    valorConversao = valorMetros * 100;
    alert("Valor em centimetros: " + valorConversao);
    break;
  case 3:
    valorConversao = valorMetros * 10;
    alert("Valor em decimetros: " + valorConversao);
    break;
  case 4:
    valorConversao = valorMetros / 10;
    alert("Valor em decametros: " + valorConversao);
    break;
  case 5:
    valorConversao = valorMetros / 100;
    alert("Valor em hectometros: " + valorConversao);
    break;
  case 6:
    valorConversao = valorMetros / 1000;
    alert("Valor em quilometros: " + valorConversao);
    break;
  default:
    alert("Opção inválida. Tente novamente.");
    break;
}
