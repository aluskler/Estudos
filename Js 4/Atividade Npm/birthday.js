const dayjs = require("dayjs");

function aniversarios(date) {
  const data = dayjs(date);
  const hoje = dayjs();

  const idade = hoje.diff(data, "year");
  const proximoNiver = data.add(idade + 1, "year");

  const diasParaNiver = proximoNiver.diff(hoje, "day");

  console.log(`Sua idade é ${idade}`);
  console.log(`Proximo niver: ${proximoNiver.format("DD/MM/YYYY")}`);

  console.log(`Faltam: ${diasParaNiver} para seu aniversario`);
}

console.log(`17/06/2001`);
