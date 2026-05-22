function verificarIdade(idade) {
  return new Promise((resolve, reject) => {
    if (idade) resolve(idade > 18);
    else reject(new Error("Idade requerida"));
  });
}

function buscarIdade(anoDeNascimento) {
  return new Promise((resolve, reject) => {
    if (anoDeNascimento) {
      const ano = new Date(anoDeNascimento).getFullYear();
      const anoAtual = new Date().getFullYear();
      resolve(anoAtual - ano);
    } else {
      reject(new Error("Ano de nascimento requerido"));
    }
  });
}

buscarIdade("2001-06-17")
  .then((idade) => {
    return verificarIdade(idade);
  })
  .then((maiorDeIdade) => {
    if (maiorDeIdade) console.log("Maior de idade");
    else console.log("Menor de idade");
  })
  .catch((erro) => {
    console.log(erro.message);
  });
