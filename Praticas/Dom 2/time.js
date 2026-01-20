function escalar() {
  let numero = document.getElementById("numero").value;
  let nome = document.getElementById("nome").value;
  let posicao = document.getElementById("posicao").value;

  let confirmar = confirm(
    `Número: ${numero}\nNome: ${nome}\nPosição: ${posicao}`
  );

  if (confirmar) {
    let time = document.getElementById("lista");
    let jogador = document.createElement("li");

    jogador.id = `Jogador: ${numero}`;
    jogador.innerText = `${posicao}: ${nome} (${numero})`;

    time.appendChild(jogador);

    document.getElementById("numero").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("posicao").value = "";
  }
}

function remover() {
  let numero = document.getElementById("numeroRemover");
  let jogadorRemover = document.getElementById(`Jogador: ${numero.value}`);

  let confirmar = confirm(`Remover Jogador: ${numero.value}`);

  if (confirmar) {
    document.getElementById("lista").removeChild(jogadorRemover);
    document.getElementById("numeroRemover").value = "";
  }
}
