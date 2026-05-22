function calcularImc(peso, altura) {
  return new Promise((resolve, reject) => {
    if (isNaN(peso) || isNaN(altura)) {
      reject("Peso e altura devem ser numeros");
    } else {
      const imc = peso / altura ** 2;
      resolve(`${imc}`);
    }
  });
}

function medidaDePeso(peso, altura) {
  calcularImc(peso, altura)
    .then((resultado) => {
      console.log(`IMC: ${resultado}`);

      if (resultado < 18.5) console.log(`Situação: Magreza`);
      else if (resultado < 25) console.log(`Situação: Normal`);
      else if (resultado < 30) console.log(`Situação: Sobrepeso`);
      else if (resultado < 40) console.log(`Situação: Obesidade`);
      else console.log(`Situação: Obesidade Grave`);
    })
    .catch((erro) => {
      console.log(`${erro}`);
    })
    .finally("Programa Finalizado");

  console.log("Calculando...");
}

medidaDePeso(80, 1.7);
medidaDePeso(70, 1.5);
medidaDePeso(50, 1.7);
medidaDePeso(120, 1.7);
medidaDePeso(75, 1.7);
medidaDePeso(80, `asdasd`);
