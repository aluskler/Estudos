async function soma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("digite apenas numeros");
  }
  return a + b;
}

async function subtrair(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("digite apenas numeros");
  } else return a - b;
}

async function execute() {
  try {
    const somaResultado = await soma(50, 33);
    console.log(somaResultado);

    const subtrairResultado = await subtrair(50, 10);
    console.log(subtrairResultado);
  } catch (erro) {
    console.log(erro);
  }
}

execute();
