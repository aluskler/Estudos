import Component from "./component.class.js";

export default class Form extends Component {
  constructor(parent, options) {
    super("form", parent, options);
  }

  addChildren(...elementos) {
    elementos.forEach((elemento) => {
      this.getElement().appendChild(elemento.getElement());
    });
  }
}
