/*Lista de vagas*/
const vagas = [];

/*1. Listar vagas disponíveis:
A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas. */
function listarVagasDisponiveis() {
  let informacoesDasVagas = "";
  for (let index = 0; index < vagas.length; index++) {
    let element = vagas[index];

    informacoesDasVagas += `Vaga: ${index + 1}\nNome da vaga: ${
      element.nome
    }\nDescrição: ${element.descricao}\nQuantidade de Candidatos ${
      element.candidatos.length
    }\n\n`;
  }
  alert(informacoesDasVagas);
  return informacoesDasVagas;
}

/*2. Criar um nova vaga:
A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.*/
function criarNovaVaga() {
  const nome = prompt("Nome da Vaga: "),
    descricao = prompt("Descrição da Vaga: "),
    data = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:");

  if (!nome || !descricao || !data) {
    alert("Todos os campos devem ser preenchidos.");
    return;
  }
  const confirmeAsInformacoes = confirm(
    `Confirme se as infromações estão corretas:\nNome da vaga: ${nome} \nDescrição da Vaga: ${descricao} \nData limite: ${data}`
  );
  if (!confirmeAsInformacoes) {
    alert("Cancelando...");
    return;
  }
  const novaVaga = {
    nome: nome,
    descricao: descricao,
    data: data,
    candidatos: [],
  };

  vagas.push(novaVaga);
  alert("Vaga Criada");
}

/*3. Visualizar uma vaga:
A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.*/

function visualizarVaga() {
  let indiceNome = "";
  for (let index = 0; index < vagas.length; index++) {
    const element = vagas[index];
    indiceNome += `${index + 1}: ${element.nome}\n`;
  }

  alert(indiceNome);

  let indiceEscolhido = parseInt(
    prompt("Escolha uma Vaga para mais informações: \n")
  );

  let vaga = vagas[indiceEscolhido - 1];

  if (!vaga) {
    alert("escolha uma vaga valida");
  } else {
    alert(
      `indice: ${indiceEscolhido}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData: ${vaga.data}\nQuantidade de Candidatos: ${vaga.candidatos.length}`
    );
  }
}

/*4. Inscrever um candidato em uma vaga:
A opção de inscrever um candidato em uma vaga deve pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
 */
function inscreverCandidatoEmUmaVaga() {
  let informacoesDasVagas = "";

  for (let index = 0; index < vagas.length; index++) {
    const element = vagas[index];

    informacoesDasVagas += `${index + 1}: ${element.nome} \n`;
  }
  alert(informacoesDasVagas);

  let nomeCandidato = prompt("Informe o nome do candidato: ");
  let indiceEscolhido = parseInt(prompt("Escolha o indice da vaga desejada: "));

  const vagaEscolhida = vagas[indiceEscolhido - 1];

  if (!vagaEscolhida) {
    alert("Indice não existe");
    return;
  }
  const confirmação = confirm(`Vaga escolhida ${vagaEscolhida.nome}`);

  if (!confirmação) {
    alert("Cancelado...");
    return;
  }
  vagaEscolhida.candidatos.push(nomeCandidato);
}

/*5. Excluir uma vaga
A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.*/

function excluirVaga() {
  let lista = "";
  for (let index = 0; index < vagas.length; index++) {
    lista += `${index + 1}: ${vagas[index].nome}\n`;
  }
  const indiceEscolhido = parseInt(
    prompt(
      `Vagas Disponiveis: \n${listarVagasDisponiveis()}\nSelecione uma vaga para excluir.`
    )
  );
  const vagaEscolhida = vagas[indiceEscolhido - 1];

  if (!vagaEscolhida) {
    alert("Escolha uma vaga Existente");
    return;
  }
  const confirmacao = confirm(
    `Tem certeza que deseja excluir a vaga:\nNome: ${vagaEscolhida.nome}\nDescrição: ${vagaEscolhida.descricao}\nData limite: ${vagaEscolhida.data}`
  );
  if (!confirmacao) {
    alert("Exclusão cancelada");
    return;
  }
  vagas.splice(indiceEscolhido - 1, 1);
}

let opcao = 0;
do {
  opcao = parseInt(
    prompt(
      "1) Listar vagas disponíveis \n2) Criar um nova vaga  \n3) Visualizar uma vaga \n4) Inscrever candidato em uma vaga \n5) Excluir uma vaga \n6) Sair"
    )
  );
  switch (opcao) {
    case 1:
      listarVagasDisponiveis();
      break;
    case 2:
      criarNovaVaga();
      break;
    case 3:
      visualizarVaga();
      break;
    case 4:
      inscreverCandidatoEmUmaVaga();
      break;
    case 5:
      excluirVaga();
      break;

    default:
      alert("Saindo do app...");
      break;
  }
} while (opcao != 6);
