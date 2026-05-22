import Character from "./Character.js";

export default class Thief extends Character {
  constructor(nome, vida, ataque, defesa) {
    super(nome, vida, ataque, defesa);
  }
  ataqueAlvo(personagem) {
    personagem.vida -= 2 * (this.ataque - personagem.defesa);
    console.log(`${this.nome} Ataca ${personagem.nome} com ${this.ataque} de ataque.
Vida de ${personagem.nome}: ${personagem.vida}`);
  }
}
