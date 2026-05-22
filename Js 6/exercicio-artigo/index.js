async function buscarArtigos() {
  const artigos = await fetch("http://localhost:3000/articles").then((result) =>
    result.json(),
  );
  artigos.forEach(renderizarArtigo);
}

function renderizarArtigo(artigoData) {
  const artigo = document.createElement("article");
  artigo.classList.add("artigo");
  artigo.id = `Artigo: ${artigoData.id}`;

  const titulo = document.createElement("h3");
  titulo.classList.add("titulo");
  titulo.textContent = artigoData.title;

  const conteudo = document.createElement("div");
  conteudo.classList.add("conteudo");
  conteudo.innerHTML = artigoData.content;

  const autor = document.createElement("div");
  autor.classList.add("autor");
  autor.textContent = artigoData.author;

  document
    .querySelector("#artigos")
    .appendChild(artigo)
    .append(titulo, conteudo, autor);
}
document.addEventListener("DOMContentLoaded", () => {
  buscarArtigos();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const artigosData = {
    title: document.querySelector("#titulo").value,
    content: document.querySelector("#conteudo").value,
    author: document.querySelector("#autor").value,
  };

  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(artigosData),
  });

  const salvarArtigo = await response.json();
  form.reset();
  renderizarArtigo(salvarArtigo);
  console.log(salvarArtigo);
});
