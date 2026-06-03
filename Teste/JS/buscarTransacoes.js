export async function buscarNaAPI() {
  return await fetch("http://localhost:3000/transferencias").then((result) =>
    result.json(),
  );
}

export function buscarNoHTML() {
  const id = document.querySelector("#id").value;
  const titulo = document.querySelector("#titulo").value;
  const valor = parseFloat(document.querySelector("#valor").value);

  return { id, titulo, valor };
}
