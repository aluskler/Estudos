/* Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

const listaDePacientes = ["Thiago", "Emanuel", "Bacalhau", "Victor"];

// posicao = listaDePacientes.indexOf(-1);

// console.log(posicao);

do {
  let opcao = parseInt(
    prompt(
      "1) Novo Paciente \n 2) Consultar Pacientes \n 3) Remover Paciente \n 4) Sair "
    )
  );
  switch (opcao) {
    case 1:
      let novoPaciente = prompt(
        listaDePacientes.push("Digite o nome do Paciente: ")
      );
      break;
    case 2:
      alert(listaDePacientes);
      break;
    case 3:
      let pacienteRemovido = prompt(
        listaDePacientes.pop("Digite o nome do paciente que deseja remover: ")
      );
      break;
    default:
      alert("Escolha uma opção valida");
      break;
  }
} while (opcao != 4);
