import Component from "./component.class.js";

export default class Label extends Component {
  constructor(text, parent, options) {
    super("label", parent, { ...options, innerText: text });
  }
}
