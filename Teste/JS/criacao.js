export function criarContainer(id) {
  const container = document.createElement("div");
  container.classList.add("transacao-container");
  container.id = `transacao-${id}`;
  return container;
}

export function criarTitulo(titulo) {
  const spanTitulo = document.createElement("span");
  spanTitulo.classList.add("transacao-titulo");
  spanTitulo.textContent = `${titulo}: `;
  return spanTitulo;
}

export function criarValor(valor) {
  const spanValor = document.createElement("span");
  spanValor.classList.add("transacao-valor");

  const formatadorBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const valorFormatado = formatadorBRL.format(valor);

  if (valor > 0) {
    spanValor.textContent = `${valorFormatado} Credito`;
    spanValor.classList.add("valor-credito");
  } else {
    spanValor.textContent = `${valorFormatado} Debito`;
    spanValor.classList.add("valor-debito");
  }
  return spanValor;
}
