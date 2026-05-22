async function getPaises() {
  const paises = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags`,
  ).then((result) => result.json());
  paises.forEach(Criarcard);
}

function Criarcard(pais) {
  const card = document.createElement(`div`);
  card.classList.add(`card`);

  const nome = document.createElement(`h2`);
  const nomePais = pais.name.common;
  nome.textContent = nomePais;

  const imagem = document.createElement(`img`);
  imagem.src = pais.flags.svg;
  imagem.alt = nomePais;

  card.append(nome, imagem);
  document.querySelector(`#paises`).append(card);
}

getPaises();
