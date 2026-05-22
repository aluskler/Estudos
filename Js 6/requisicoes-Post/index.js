function renderizarArtigos(artigos) {
  const artigo = document.createElement("article");
  artigo.classList.add("artigo");
  artigo.id = `Artigo ${artigos.id}`;

  const titulo = document.createElement("h3");
  titulo.classList.add("artigo-titulo");
  titulo.textContent = artigos.title;

  const conteudo = document.createElement("div");
  conteudo.classList.add("artigo-conteudo");
  conteudo.innerHTML = artigos.content;

  const autor = document.createElement("div");
  autor.classList.add("artigo-autor");
  autor.textContent = artigos.author;

  artigo.append(titulo, conteudo, autor);
  document.querySelector("#articles").appendChild(artigo);
}

async function buscarArtigos() {
  const artigos = await fetch("http://localhost:3000/articles").then((result) =>
    result.json(),
  );
  artigos.forEach(renderizarArtigos);
}

document.addEventListener("DOMContentLoaded", () => {
  buscarArtigos();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
  };

  await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  buscarArtigos();
});
