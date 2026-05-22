import Component from "./component.class.js";
import Form from "./form.class.js";
import Input from "./input.class.js";
import Label from "./label.class.js";
import { Renderizador } from "./render.js";

const el = new Component("h1", "body", { innerText: "Ola, Mundo!" });
console.log(el);
el.render();

/*
Metodo 1
el.render();
Metodo 2
const renderizador = new Renderizador();
renderizador.addInstancia(el); 
*/
/*
el.tag = "h2";
el.build().render();
*/

const form = new Form("body");

const label = new Label("Name: ", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "birthday" });

form.render();
label.render();
input.render();

form.addChildren(
  new Component(`br`),
  new Component(`br`),
  new Label(`Data de Nascimento: `, form, { htmlFor: "birthdayInput" }),
  new Input(form, { id: "birthdayInput", name: "birthday", type: "date" }),
);

form.render();
