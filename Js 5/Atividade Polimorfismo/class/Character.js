export default class Character {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
    this.ePosicaoAtaque = true; // status padrão para personagens sem posição própria
    this.escudo = 0; // valor padrão quando não há escudo específico
  }

  ataqueAlvo(personagem) {
    personagem.vida -= this.ataque - personagem.defesa;

    console.log(`${this.nome} Ataca ${personagem.nome} com ${this.ataque} de ataque.
Vida de ${personagem.nome}: ${personagem.vida}`);
  }
}
