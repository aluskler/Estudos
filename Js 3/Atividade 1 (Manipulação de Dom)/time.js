function adicionar() {
  const nome = document.getElementById("nome").value;
  const posicao = document.getElementById("posicao").value;
  const numero = document.getElementById("numero").value;

  const confirmacao = confirm(`Escalar ${nome} como ${posicao} ?`);

  if (confirmacao) {
    const listaTime = document.getElementById("listaTime");
    const jogador = document.createElement("li");

    jogador.id = "jogador-" + numero;
    jogador.innerText = `${posicao}: ${nome} (${numero})`;
    listaTime.appendChild(jogador);

    document.createElement("Jogador").value = "";
  }
}

function remover() {
  const numero = document.getElementById("numero").value;
  const removerJogador = document.getElementById("jogador-" + numero);

  const confirmacao = confirm(
    `Remover o jogador ${removerJogador.innerText} ?`
  );

  if (confirmacao) {
    document.getElementById("listaTime").removeChild(removerJogador);
    document.getElementById("removerJogador").value = "";
  }
}
