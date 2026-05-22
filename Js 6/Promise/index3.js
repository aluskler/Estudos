function soma(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("tem que ser um numero");
    } else {
      resolve(a + b);
    }
  });
}

function subtrair(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("tem que ser numero");
    } else {
      resolve(a - b);
    }
  });
}

const somaResultado = soma(50, 33);
const subtrairResultado = subtrair(50, null);

Promise.all([somaResultado, subtrairResultado])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });

const numbers = [4, 9, 5, 13, 77];

function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    resolve(x * x);
  });
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
});
