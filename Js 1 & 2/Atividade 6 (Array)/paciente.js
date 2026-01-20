/* Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */
/*
const listaDePacientes = ["Thiago", "Emanuel", "Bacalhau", "Victor"];

let opcao;

do {
  opcao = parseInt(
    prompt("1) Novo Paciente \n 2) Consultar Pacientes \n 3) Sair ")
  );
  switch (opcao) {
    case 1:
      listaDePacientes.push(prompt("Digite o nome do Paciente: "));
      break;
    case 2:
      if (listaDePacientes.length > 0) {
        let pacienteRemovido = listaDePacientes.shift();
        alert(pacienteRemovido);
      } else {
        alert("Não tem mais pacientes");
      }
      break;
    case 3:
      alert("Voce está saindo");
      break;
    default:
      alert("Escolha uma opção valida");
      break;
  }
} while (opcao != 3);
*/

/*
Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */
/*
const baralho = ["1♥️", "1♠️", "1♦️", "1♣️", "2♥️", "2♠️", "2♦️", "2♣️"];
let opcao;

do {
  opcao = parseInt(
    prompt("1) Adicionar uma carta \n 2) Puxar uma carta \n 3) Sair")
  );

  switch (opcao) {
    case 1:
      baralho.unshift(prompt("Nome da carta: "));
      break;
    case 2:
      if (baralho.length > 0) {
        alert(baralho.shift());
      } else {
        alert("Baralho vazio");
      }
      break;
    case 3:
      alert("Voce está saindo");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (opcao != 3); */
