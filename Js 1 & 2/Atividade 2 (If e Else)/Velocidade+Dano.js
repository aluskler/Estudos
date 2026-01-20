// Velocidade de veiculo
/*nomeDoVeiculo1 = prompt("Qual o nome do Primeiro veículo?");
nomeDoVeiculo2 = prompt("Qual o nome do Segundo veículo?");

velocidadeVeiculo1 = parseFloat(
  prompt("Qual a velocidade do Primeiro veículo?")
);
velocidadeVeiculo2 = parseFloat(
  prompt("Qual a velocidade do Segundo veículo?")
);

veiculo1 = nomeDoVeiculo1 + " " + velocidadeVeiculo1;
veiculo2 = nomeDoVeiculo2 + " " + velocidadeVeiculo2;

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert(
    "O veículo " +
      nomeDoVeiculo1 +
      " é mais rápido que o veículo " +
      nomeDoVeiculo2
  );
} else if (velocidadeVeiculo1 === velocidadeVeiculo2) {
  alert(
    "O veículo " +
      nomeDoVeiculo1 +
      " tem a mesma velocidade que o veículo " +
      nomeDoVeiculo2
  );
} else {
  alert(
    "O veículo " +
      nomeDoVeiculo2 +
      " é mais rápido que o veículo " +
      nomeDoVeiculo1
  );
} */

const nome = prompt("Qual nome do seu personagem? ");
const nomeDoAtaque = prompt("Qual o nome do ataque? ");
let poderDoAtaque = parseFloat(
  prompt("Qual o poder de ataque do seu personagem? ")
);

let pontosDeVidaDoInimigo = parseFloat(prompt("Qual a vida do inimigo? "));
const defesaDoInimigo = parseFloat(prompt("Qual a defesa do inimigo? "));
let escudo = confirm("O inimigo tem escudo? ");

let dano;

if (escudo == true) {
  alert("Inimigo tem escudo");
  dano = (poderDoAtaque - defesaDoInimigo) / 2;
} else {
  alert("Inimigo não tem escudo");
  dano = poderDoAtaque - defesaDoInimigo;
}

if (dano > 0) {
  alert(
    nome +
      " usou " +
      nomeDoAtaque +
      " e causou " +
      dano +
      " de dano no inimigo!" +
      "\n" +
      "O inimigo tem " +
      (pontosDeVidaDoInimigo - dano) +
      " de vida restante!"
  );
} else {
  alert(
    nome +
      " usou " +
      nomeDoAtaque +
      " e não causou dano no inimigo!" +
      "\n" +
      "O inimigo tem " +
      pontosDeVidaDoInimigo +
      " de vida restante!"
  );
}
