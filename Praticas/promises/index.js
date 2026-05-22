function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada");

    setTimeout(() => {
      if (false) {
        reject("algo deu errado!");
      } else {
        console.log("Resolvendo a promise...");
        resolve("Resultado");
      }
    }, 1000 * 3);
  });
}

execute()
  .then((resultado) => {
    console.log(`A promise foi resolvida. O resultado foi :${resultado}`);
  })
  .catch((erro) => {
    console.log(`A promise foi rejeitada! Motivo: ${erro}`);
  })
  .finally(() => {
    console.log("Promise finalizada.");
  });
