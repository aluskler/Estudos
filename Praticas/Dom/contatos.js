function adicionarContato() {
  const contatoElemento = document.getElementById("listaDeContatos");
  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");

  //Campo de Nome:
  const nomeLi = document.createElement("li");
  nomeLi.innerText = "Nome: ";
  const nomeinput = document.createElement("input");
  nomeinput.type = "text";
  nomeinput.name = "nomecompleto";
  nomeLi.appendChild(nomeinput);
  ul.appendChild(nomeLi);
  ul.appendChild(document.createElement("br"));

  //Campo de Telefone:
  const telefoneLi = document.createElement("li");
  telefoneLi.innerText = "Telefone: ";
  const telefoneInput = document.createElement("input");
  telefoneInput.type = "text";
  telefoneInput.name = "telefone";
  telefoneLi.appendChild(telefoneInput);
  ul.appendChild(telefoneLi);
  ul.appendChild(document.createElement("br"));

  //Campo de Endereço
  const enderecoLi = document.createElement("li");
  enderecoLi.innerText = "Endereço: ";
  const enderecoInput = document.createElement("input");
  enderecoInput.type = "text";
  enderecoInput.name = "endereco";
  enderecoLi.appendChild(enderecoInput);
  ul.appendChild(enderecoLi);
  ul.appendChild(document.createElement("br"));

  contatoElemento.append(h3, ul);
}

function removerContato() {
  const contatoElemento = document.getElementById("listaDeContatos");

  const titolo = document.getElementsByTagName("h3");
  const contato = document.getElementsByTagName("ul");

  contatoElemento.removeChild(titolo[titolo.length - 1]);
  contatoElemento.removeChild(contato[contato.length - 1]);
}
