async function Imc(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    return Promise.reject("peso e altura devem ser numeros");
  }
  return peso / (altura * altura);
}

async function executarImc(peso, altura) {
  try {
    console.log(`calculando o IMC para peso ${peso} e altura ${altura}...`);

    const result = await Imc(peso, altura);

    console.log(`O resultado do IMC foi de ${result}.`);

    if (result < 18.5) console.log(`Situação: Magreza`);
    else if (result < 25) console.log(`Situação: Normal`);
    else if (result < 30) console.log(`Situação: Sobrepeso`);
    else if (result < 40) console.log(`Situação: Obesidade`);
    else console.log(`Situação: Obesidade Grave`);
  } catch (erro) {
    console.log(erro);
  }
}

executarImc(71, 1.74);
