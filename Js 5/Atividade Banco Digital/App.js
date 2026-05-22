import { Deposito } from "./Class/Deposito.js";
import { Usuario } from "./Class/Usuario.js";
import { Transferencia } from "./Class/Transferencia.js";
import { Emprestimo } from "./Class/Emprestimo.js";

export class App {
  static #usuarios = [];

  static buscarUsuario(email) {
    const usuarioEncontrado = App.#usuarios.find((e) => e.email === email);
    if (!usuarioEncontrado) {
      throw new Error("Usuario não encontrado");
    }
    return usuarioEncontrado;
  }

  static criarUsuario(email, nomeCompleto) {
    const usuarioExiste = App.#usuarios.find((e) => e.email === email);
    if (usuarioExiste) throw new Error("Usuario já cadastrado");
    return App.#usuarios.push(new Usuario(email, nomeCompleto));
  }

  static fazerDeposito(email, valor) {
    const usuario = this.buscarUsuario(email);
    if (usuario) {
      const novoDeposito = new Deposito(valor);
      usuario.conta.addDeposito(novoDeposito);
    }
  }

  static fazerTransferencia(emailRemetente, emailReceptor, valor) {
    const remetente = this.buscarUsuario(emailRemetente);
    const receptor = this.buscarUsuario(emailReceptor);
    if (!remetente || !receptor)
      throw new Error("Remetente ou Receptor não encontrado");

    const novaTransferencia = new Transferencia(remetente, receptor, valor);
    remetente.conta.addTransferencia(novaTransferencia);
    receptor.conta.addTransferencia(novaTransferencia);
  }

  static fazerEmprestimo(email, valor, parcelas) {
    const usuario = this.buscarUsuario(email);
    if (!usuario) throw new Error("Conta não encontrada");
    const novoEmprestimo = new Emprestimo(valor, parcelas);
    usuario.conta.addEmprestimos(novoEmprestimo);
  }

  static alterarTaxaDeImprestimo(novaPorcentagem) {
    Emprestimo.juros = novaPorcentagem;
  }
}
