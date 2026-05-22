function contador() {
  let contador = 0;
  const interval = setInterval(() => {
    contador += 1;

    if (contador <= 10) {
      console.log(`contando ${contador}`);
    } else {
      clearInterval(interval);
    }
  }, 1000 * 1);
}

contador();
