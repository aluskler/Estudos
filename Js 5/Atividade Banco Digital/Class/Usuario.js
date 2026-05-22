import { Conta } from "./Conta.js";

export class Usuario {
  constructor(email, nomeCompleto) {
    this.email = email;
    this.nomeCompleto = nomeCompleto;
    this.conta = new Conta(this);
  }
}
