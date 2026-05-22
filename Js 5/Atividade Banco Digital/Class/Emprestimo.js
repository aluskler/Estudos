import { Parcela } from "./Parcela.js";

export class Emprestimo {
  static #juros = 1.05;

  constructor(valor, parcelas) {
    this.valor = valor;
    this.parcelas = [];
    const valorComJuros = (valor * Emprestimo.#juros) / parcelas;
    for (let i = 1; i <= parcelas; i++) {
      this.parcelas.push(new Parcela(valorComJuros, i));
    }
    this.criarData = new Date();
  }

  static get juros() {
    return Emprestimo.#juros;
  }

  static set juros(novaPorcentagem) {
    Emprestimo.#juros = novaPorcentagem / 100 + 1;
  }
}
