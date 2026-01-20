function criarLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlFor;
  return label;
}

function criarInput(id, name, className = "", type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.name = name;
  input.className = className;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const devs = [];
let id = 0;
const btAdicionar = document.getElementById("adicionar");

btAdicionar.addEventListener("click", function (ev) {
  ev.preventDefault();

  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  id++;
  let novoId = id;

  li.id = novoId;
  li.className = "tecnologias";

  const tecnologiaLabel = criarLabel("Tecnologia:", "Id-" + novoId);
  const tecnologiaInput = criarInput(
    "Id-" + novoId,
    "Tecnologia",
    "nomeTecnologia"
  );

  //RADIOS

  const experienciaId = novoId + ".1";
  const experienciaInput1 = criarInput(
    experienciaId,
    "Experiencia" + experienciaId,
    "Tecnologias",
    "radio"
  );
  experienciaInput1.value = "0-2 Anos";
  const experienciaLabel1 = criarLabel("0-2 Anos", novoId + ".1");

  const experienciaInput2 = criarInput(
    experienciaId,
    "Experiencia" + experienciaId,
    "Tecnologias",
    "radio"
  );
  experienciaInput2.value = "2-4 Anos";
  const experienciaLabel2 = criarLabel("2-4 Anos", novoId + ".2");

  const experienciaInput3 = criarInput(
    experienciaId,
    "Experiencia" + experienciaId,
    "Tecnologias",
    "radio"
  );
  experienciaInput3.value = "4-6 Anos";
  const experienciaLabel3 = criarLabel("4-6 Anos", novoId + ".3");

  const btnRemover = document.createElement("button");
  btnRemover.innerText = "Remover";
  btnRemover.addEventListener("click", function () {
    ul.removeChild(li);
  });

  li.append(
    tecnologiaLabel,
    tecnologiaInput,
    btnRemover,
    experienciaInput1,
    experienciaLabel1,
    experienciaInput2,
    experienciaLabel2,
    experienciaInput3,
    experienciaLabel3
  );
  ul.appendChild(li);
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (form) {
  form.preventDefault();

  const nomeCompleto = document.getElementById("nomeCompleto");
  const nomeTecnologia = this.querySelectorAll("li");

  let tecnologias = [];
  nomeTecnologia.forEach(function (li) {
    const inputTecnologia = li.querySelector("input[name = 'Tecnologia']");
    const nomeDaTecnologia = inputTecnologia.value;

    const radio = li.querySelector("input[type = 'radio']:checked");
    const experienciaText = radio ? radio.value : "Sem Experiencia";
    tecnologias.push({ nome: nomeDaTecnologia, experiencia: experienciaText });
  });

  devs.push({ nomeCompleto: nomeCompleto.value, tecnologias: tecnologias });
  alert("Dev cadastrado");

  nomeCompleto.value = "";
  nomeTecnologia.forEach(function (row) {
    row.remove();
  });
  console.log(devs);
});
