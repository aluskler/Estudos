import { transacoes } from "./transacao.js";

export function atualizarSaldo() {
  const saldoSpan = document.querySelector("#span-saldo");
  const saldo = transacoes.reduce(
    (contador, transacao) => contador + transacao.valor,
    0,
  );
  const formatador = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  saldoSpan.textContent = formatador.format(saldo);
}
