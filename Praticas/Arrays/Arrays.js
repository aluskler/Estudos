const personagens = [
  { nome: "Thiago", nivel: 100, raca: "humano", classe: "guerreiro" },
  { nome: "Aluskler", nivel: 100, raca: "humano", classe: "arqueiro" },
  { nome: "Wayne", nivel: 100, raca: "humano", classe: "mago" },
  { nome: "azyrof", nivel: 100, raca: "orc", classe: "guerreiro" },
  { nome: "guentrall", nivel: 100, raca: "orc", classe: "arqueiro" },
  { nome: "trawl", nivel: 100, raca: "orc", classe: "mago" },
];

const nome = personagens.map(function (persoanagem) {
  return persoanagem.nome;
});

console.log(nome);
