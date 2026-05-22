function carta(mensagem, minuto) {
  setTimeout(
    () => {
      console.log(mensagem);
    },
    minuto * 60 * 1000,
  );
}

carta(`oi me chamo Thiago`, 1);
