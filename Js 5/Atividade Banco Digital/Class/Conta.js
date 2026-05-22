export class Conta {
  #saldo;
  constructor(usuario) {
    this.dono = usuario;
    this.#saldo = 0;
    this.depositos = [];
    this.emprestimos = [];
    this.transferencias = [];
  }

  get saldo() {
    return this.#saldo;
  }

  addDeposito(deposito) {
    this.#saldo += deposito.valor;
    this.depositos.push(deposito);
  }
  addEmprestimos(emprestimo) {
    this.#saldo += emprestimo.valor;
    this.emprestimos.push(emprestimo);
  }
  addTransferencia(transferencia) {
    if (transferencia.receptor.email === this.dono.email) {
      this.#saldo += transferencia.valor;
      this.transferencias.push(transferencia);
    } else if (transferencia.remetente.email === this.dono.email) {
      this.#saldo -= transferencia.valor;
      this.transferencias.push(transferencia);
    }
  }
}
