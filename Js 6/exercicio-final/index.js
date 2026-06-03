let transacoes = [];

function criarConteinerDaTransacao(id) {
  const conteiner = document.createElement("div");
  conteiner.classList.add("conteiner-Transacao");
  conteiner.id = `transacoes-${id}`;
  return conteiner;
}

function criarTitularDaTransacao(nome) {
  const titular = document.createElement("span");
  titular.classList.add("titular-Transacao");
  titular.textContent = nome + ":";
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
    document.querySelector("#nome").value = transacao.name;
    document.querySelector("#valor").value = transacao.amount;
  });

  return botaoEditar;
}

function criarBotaoRemoverTransacao(id) {
  const botao = document.createElement("button");
  botao.classList.add("botao-remover-transacao");
  botao.textContent = "Excluir";

  botao.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    });

    botao.parentElement.remove();

    const indexToRemove = transacoes.findIndex((i) => i.id == id);
    transacoes.splice(indexToRemove, 1);
    atualizarValor();
  });
  return botao;
}

function renderizarTransacao(transacao) {
  const conteiner = criarConteinerDaTransacao(transacao.id);

  const conjuntoTituValor = document.createElement("div");
  conjuntoTituValor.classList.add("conjunto-titular-valor");

  const titular = criarTitularDaTransacao(transacao.name);
  const valor = criarValorDaTransacao(transacao.amount);
  const botaoEditarTransacao = criarBotaoEditarTransacao(transacao);
  const botaoRemoverTransacao = criarBotaoRemoverTransacao(transacao.id);

  conjuntoTituValor.append(titular, valor);
  document
    .querySelector("#transacoes")
    .appendChild(conteiner)
    .append(conjuntoTituValor, botaoEditarTransacao, botaoRemoverTransacao);
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
  BotaoMaisMenos();
}

async function novaTransacao(ev) {
  ev.preventDefault();

  const id = document.querySelector("#id").value;
  const name = document.querySelector("#nome").value;
  const amount = parseFloat(document.querySelector("#valor").value);

  if (id) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, amount }),
      headers: { "content-Type": "application/json" },
    });

    const transacao = await response.json();
    const indexToRemove = transacoes.findIndex((i) => i.id == id);
    transacoes.splice(indexToRemove, 1, transacao);
    document.querySelector(`#transacoes-${id}`).remove();
    renderizarTransacao(transacao);
  } else {
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify({ name, amount }),
      headers: { "content-type": "application/json" },
    });

    const transacao = await response.json();
    transacoes.push(transacao);
    renderizarTransacao(transacao);
  }

  ev.target.reset();
  atualizarValor();
}

function BotaoMaisMenos() {
  const inputValor = document.getElementById("valor");
  const btnMenos = document.querySelector(".btn-menos");
  const btnMais = document.querySelector(".btn-plus");

  btnMenos.addEventListener("click", () => {
    inputValor.stepDown();
  });

  btnMais.addEventListener("click", () => {
    inputValor.stepUp();
  });
}

document.addEventListener("DOMContentLoaded", setup);
document.querySelector("form").addEventListener("submit", novaTransacao);
