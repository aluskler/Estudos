export class Transferencia {
  constructor(remetente, receptor, valor) {
    this.remetente = remetente;
    this.receptor = receptor;
    this.valor = valor;
    this.criarData = new Date();
  }
}
