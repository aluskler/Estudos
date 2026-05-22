let transacoes = [];

function criarConteinerDaTransacao(id) {
  const conteiner = document.createElement("div");
  conteiner.classList.add("conteiner-Transacao");
  conteiner.id = `Transação ${id}`;
  return conteiner;
}

function criarTitularDaTransacao(nome) {
  const titular = document.createElement("span");
  titular.classList.add("titular-Transacao");
  titular.textContent = nome;
  return titular;
}

function criarValorDaTransacao(valor) {
  const span = document.createElement("span");
  span.classList.add("valor-Transacao");

  const formatadorBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const valorFormatado = formatadorBRL.format(valor);

  if (valor > 0) {
    span.textContent = `${valorFormatado} Credito`;
    span.classList.add("credito");
  } else {
    span.textContent = `${valorFormatado} Debito`;
  }
  return span;
}

function criarBotaoEditarTransacao(transacao) {
  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao-editar-transacao");
  botaoEditar.textContent = "Editar";

  botaoEditar.addEventListener("click", () => {
    document.querySelector("#id").value = transacao.id;
    document.querySelector("#nome").value = transacao.nome;
    document.querySelector("#valor").value = transacao.amount;
  });

  return botaoEditar;
}

function renderizarTransacao(transacao) {
  const conteiner = criarConteinerDaTransacao(transacao.id);
  const titular = criarTitularDaTransacao(transacao.name);
  const valor = criarValorDaTransacao(transacao.amount);
  const botaoEditarTransacao = criarBotaoEditarTransacao(transacao);

  document
    .querySelector("#transacoes")
    .appendChild(conteiner)
    .append(titular, valor, botaoEditarTransacao);
}

async function buscarTransacoes() {
  return await fetch("http://localhost:3000/transactions").then((result) =>
    result.json(),
  );
}

function atualizarValor() {
  const saldoSpan = document.querySelector("#saldo");
  const saldo = transacoes.reduce(
    (soma, transacao) => soma + transacao.amount,
    0,
  );
  const formatador = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  saldoSpan.textContent = formatador.format(saldo);
}

async function setup() {
  const result = await buscarTransacoes();
  transacoes.push(...result);
  transacoes.forEach(renderizarTransacao);
  atualizarValor();
}

async function novaTransacao(ev) {
  ev.preventDefault();

  const name = document.querySelector("#nome").value;
  const amount = parseFloat(document.querySelector("#valor").value);

  const response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    body: JSON.stringify({ name, amount }),
    headers: { "content-type": "application/json" },
  });

  const transacao = await response.json();
  transacoes.push(transacao);
  renderizarTransacao(transacao);

  ev.target.reset();
  atualizarValor();
}

document.addEventListener("DOMContentLoaded", setup);
document.querySelector("form").addEventListener("submit", novaTransacao);
