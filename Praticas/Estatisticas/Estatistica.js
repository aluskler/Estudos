/*Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.*/

function soma(...numeros) {
  const resultado = numeros.reduce(
    (acumulador, numero) => acumulador + numero,
    0,
  );
  return resultado / numeros.length;
}

console.log(soma(2, 2, 2));

/*Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.*/

function mediaPonderada(...entradas) {
  const nota = entradas.reduce(
    (acumulador, { numero, valor }) => acumulador + numero * (valor ?? 1),
    0,
  );
  const valorNota = entradas.reduce(
    (acumulador, peso) => acumulador + (peso.valor ?? 1),
    0,
  );
  return nota / valorNota;
}

console.log(
  mediaPonderada(
    { numero: 9, valor: 3 },
    { numero: 6, valor: 4 },
    { numero: 10, valor: 5 },
  ),
);

/*Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.*/

const mediana = (...numeros) => {
  const ordenaNumeros = numeros.sort((a, b) => a - b);
  const meio = Math.floor(ordenaNumeros.length) / 2;

  if (ordenaNumeros.length % 2 !== 0) {
    return ordenaNumeros[meio];
  }

  const primeiraMedia = ordenaNumeros[meio - 1];
  const segundaMedia = ordenaNumeros[meio];

  const media = (primeiraMedia + segundaMedia) / 2;
  return media(primeiraMedia, segundaMedia);
};

console.log(mediana(2, 5, 99, 4, 42, 7));
console.log(mediana(15, 14, 8, 7, 3));

/*Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.*/

const moda = (...numeros) => {
  const quantidade = numeros.map((num) => [
    num,
    numeros.filter((n) => num === n).length,
  ]);
  quantidade.sort((a, b) => b[1] - a[1]);

  return quantidade[0][0];
};
console.log(`Moda: ${moda(1, 1, 9, 9, 9, 9, 9, 9, 5, 4, 6, 3, 8, 5)}`);
