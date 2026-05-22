import { App } from "./App.js";

/*buscarUsuario, criarUsuario, fazerDeposito, fazerTransferencia, fazerEmprestimo, alterarTaxaDeImprestimo*/

App.criarUsuario("Thiagoemanoelbf@hotmail.com", "Thiago Emanuel");
App.criarUsuario("Bacalhauemanoel@hotmail.com", "Bacalhau Emanuel");
App.criarUsuario("Kaioemanoel@hotmail.com", "Kaio Emanuel");

App.fazerDeposito("Thiagoemanoelbf@hotmail.com", 100);

App.fazerTransferencia(
  "Thiagoemanoelbf@hotmail.com",
  "Bacalhauemanoel@hotmail.com",
  20,
);

App.alterarTaxaDeImprestimo(10);
App.fazerEmprestimo("Kaioemanoel@hotmail.com", 2000, 24);

console.log(App.buscarUsuario("Thiagoemanoelbf@hotmail.com"));
console.log(App.buscarUsuario("Thiagoemanoelbf@hotmail.com").conta);

console.log(App.buscarUsuario("Bacalhauemanoel@hotmail.com"));
console.log(App.buscarUsuario("Bacalhauemanoel@hotmail.com").conta);

console.log(App.buscarUsuario("Kaioemanoel@hotmail.com"));
console.log(App.buscarUsuario("Kaioemanoel@hotmail.com").conta);

console.log(
  App.buscarUsuario("Kaioemanoel@hotmail.com").conta.emprestimos[0].parcelas,
);
