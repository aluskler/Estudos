/*Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.

O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações:Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

let opcao;
let imoveis = [];
let imovel = {};

let quantidadeDeImoveis = 0;
do {
  opcao = parseInt(
    prompt(
      `Imoveis Cadastrados: ${quantidadeDeImoveis}\n1) Salvar Imovel. \n2) Monstrar todos os Imoveis Salvos. \n3) Sair.`
    )
  );
  switch (opcao) {
    case 1:
      let nomeDoProprietario = prompt("Nome do proprietario: ");
      let quantidadeDeQuartos = parseInt(prompt("Quantidade de quartos: "));
      let quantidadeDeBanheiro = parseInt(prompt("Quantidade de banheiros: "));
      let possuiGaragem = confirm("O imovel possui garagem?");

      imovel = {
        proprietario: nomeDoProprietario,
        quartos: quantidadeDeQuartos,
        banheiro: quantidadeDeBanheiro,
        garagem: possuiGaragem ? prompt("Quantidade de garagem: ") : 0,
      };
      imoveis.push(imovel);
      quantidadeDeImoveis = imoveis.length;
      break;
    case 2:
      let todosOsImoveis = "";
      for (let index = 0; index < imoveis.length; index++) {
        const element = imoveis[index];

        todosOsImoveis += `Imovel ${index + 1}: \n${element.proprietario}\n${
          element.quartos
        }\n${element.banheiro}\n${element.garagem}\n\n`;
      }
      alert(todosOsImoveis);
      break;
    default:
      console.log("Insira uma opcao valida!");
      break;
  }
} while (opcao !== 3);
