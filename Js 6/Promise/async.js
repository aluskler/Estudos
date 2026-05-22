async function soma(a, b) {
  if (isNaN(a) || isNaN(b)) return Promise.reject("digite um número");
  else return a + b;
}

async function subtrair(a, b) {
  if (typeof "number" !== a || typeof "number" !== b)
    return Promise.reject("Digite um número");
  else return a - b;
}

const numeroDeSoma = soma(50, null);
const numeroDeSubtracao = subtrair(50, 20);

Promise.all([numeroDeSoma, numeroDeSubtracao])
  .then((result) => {
    console.log(result);
  })
  .catch((erro) => {
    console.log(erro);
  });
