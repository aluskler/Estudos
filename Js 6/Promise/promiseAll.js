function espere(segundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, segundos * 1000);
  });
}

const numeros = [4, 5, 9, 13, 77];

async function executar() {
  const quadrado = await Promise.all(
    numeros.map(async (numero) => {
      await espere(2);
      return numero * numero;
    }),
  );

  console.log(quadrado);
}

executar();

/*const quadrados = numeros.map(async (numero) => {
  await espere(2);
  return numero * numero;
});

//console.log(quadrados);

Promise.all(quadrados).then((result) => {
  console.log(result);
});*/
