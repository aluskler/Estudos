import { atualizarSaldo } from "./saldo.js";
import { transacoes } from "./transacao.js";

export function botaoMaisMenos() {
  const valor = document.querySelector("#valor");
  const mais = document.querySelector(".btn-mais");
  const menos = document.querySelector(".btn-menos");

  mais.addEventListener("click", () => {
    valor.stepUp();
  });

  menos.addEventListener("click", () => {
    valor.stepDown();
  });
}

export function botaoRemover(id) {
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-remover");
  botaoRemover.textContent = "Remover";

  botaoRemover.addEventListener("click", async () => {
    const response = await fetch(`http://localhost:3000/transferencias/${id}`, {
      method: "DELETE",
    });

    botaoRemover.closest(".transacao-container").remove();

    const idRemover = transacoes.findIndex((i) => i.id === id);
    transacoes.splice(idRemover, 1);
    atualizarSaldo();
  });
  return botaoRemover;
}

export function botaoEditar(transacao) {
  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao-editar");
  botaoEditar.textContent = "Editar";

  botaoEditar.addEventListener("click", () => {
    document.querySelector("#id").value = transacao.id;
    document.querySelector("#titulo").value = transacao.titulo;
    document.querySelector("#valor").value = transacao.valor;
  });
  return botaoEditar;
}
