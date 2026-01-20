const turista = prompt("Qual o seu nome? ");
let resposta = "sim";
let nomeCidade = "";
let numeroDeCidades = 0;

while (resposta == "sim") {
  resposta = prompt("Você já visitou alguma cidade? (sim/não)");
  if (resposta == "não") {
    break;
  }
  nomeCidade += prompt("Qual cidade você visitou? ") + ", ";
  numeroDeCidades++;
}
alert(
  "Que legal, " +
    turista +
    "! Você já visitou " +
    numeroDeCidades +
    " " +
    "Cidades: " +
    nomeCidade.substring(0, nomeCidade.length - 1) +
    "!"
);