export class Renderizador {
  #elements = [];

  addInstancia(instancia) {
    this.#elements.push(instancia);
  }

  renderizar() {
    this.#elements.forEach((e) => e.render());
  }
}
