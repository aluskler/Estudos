import Character from "./Character.js";

export default class Mage extends Character {
  constructor(nome, vida, ataque, defesa, magia) {
    super(nome, vida, ataque, defesa);
    this.magia = magia;
  }
  ataqueAlvo(personagem) {
    personagem.vida -= this.ataque + this.magia - personagem.defesa;
    console.log(`${this.nome} Ataca ${personagem.nome} com ${this.ataque} de ataque.
Vida de ${personagem.nome}: ${personagem.vida}`);
  }
  aumentarVida(personagem) {
    personagem.vida += this.magia * 2;
    console.log(`O mago ${this.nome} usa a magia Curar em ${personagem.nome}
Vida atual: ${personagem.vida}`);
  }
}
