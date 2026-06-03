import { buscarNaAPI, buscarNoHTML } from "./buscarTransacoes.js";
import { renderizarTransacao } from "./renderizador.js";
import { botaoMaisMenos } from "./botoes.js";
import { atualizarSaldo } from "./saldo.js";

export const transacoes = [];

export async function novaTransacao(ev) {
  ev.preventDefault();

  const { id, titulo, valor } = buscarNoHTML();

  if (id) {
    const response = await fetch(`http://localhost:3000/transferencias/${id}`, {
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ titulo, valor }),
      method: "PUT",
    });

    const transacao = await response.json();

    const indexRemove = transacoes.findIndex((i) => i.id === id);

    transacoes.splice(indexRemove, 1, transacao);

    document.querySelector(`#transacao-${id}`).remove();
    renderizarTransacao(transacao);
  } else {
    const response = await fetch("http://localhost:3000/transferencias", {
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ titulo, valor }),
      method: "POST",
    });

    const transacao = await response.json();
    transacoes.push(transacao);
    renderizarTransacao(transacao);
  }

  atualizarSaldo();
}

export async function transacao() {
  const transacoesEncontradas = await buscarNaAPI();
  transacoes.push(...transacoesEncontradas);
  transacoes.forEach(renderizarTransacao);

  botaoMaisMenos();
  atualizarSaldo();
}
