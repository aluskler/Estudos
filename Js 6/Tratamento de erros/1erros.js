function soma(a, b) {
  const primeiroNumero = Number(a);
  const segundoNumero = Number(b);

  return primeiroNumero + segundoNumero;
}

try {
  console.log(soma(2, 3));
  console.log(soma(2, `a`));
  console.log(soma(`1`, 3));
  console.log(soma(2, undefined));
  console.log(soma(2, `0`));
  console.log(soma(`1`, zero));
} catch (error) {
  console.log(`erro acusado`);
  console.log(error.message);
}
