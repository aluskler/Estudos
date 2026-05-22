import Character from "./Character.js";

export default class Warrior extends Character {
  constructor(nome, vida, ataque, defesa, escudo) {
    super(nome, vida, ataque, defesa);
    this.escudo = escudo;
    this.Posicao = `Ataque`;
  }

  ataqueAlvo(personagem) {
    if (this.Posicao === `Ataque`) {
      super.ataqueAlvo(personagem);
    } else {
    }
  }

  mudarPosicao() {
    if (this.Posicao === "Ataque") {
      this.Posicao === "Defesa";
      this.defesa += this.escudo;
      console.log("O Guerreiro está em posição de DEFESA");
    } else {
      this.Posicao = "Ataque";
      this.defesa -= this.escudo;
      console.log("O Guerreiro está em posição de Ataque");
    }
  }
}
