import { botaoRemover, botaoEditar } from "./botoes.js";
import { criarContainer, criarTitulo, criarValor } from "./criacao.js";

export function renderizarTransacao(transacao) {
  const conteiner = criarContainer(transacao.id);
  const titulo = criarTitulo(transacao.titulo);
  const valor = criarValor(transacao.valor);

  const botoes = document.createElement("div");
  const remover = botaoRemover(transacao.id);
  const editar = botaoEditar(transacao);

  botoes.append(remover, editar);
  conteiner.append(titulo, valor, botoes);
  document.querySelector("#transacoes").appendChild(conteiner);
}
