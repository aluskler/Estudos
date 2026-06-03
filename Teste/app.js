import { transacao, novaTransacao } from "./JS/transacao.js";

document.addEventListener("DOMContentLoaded", transacao);
document.querySelector("form").addEventListener("submit", novaTransacao);

// --- NOVA LÓGICA PARA LIMPAR O ZERO ---
const inputValor = document.querySelector("#valor");

// Quando o usuário clica/foca no campo
inputValor.addEventListener("focus", () => {
  if (inputValor.value === "0") {
    inputValor.value = ""; // Deixa o campo limpo com a barrinha piscando
  }
});

// Quando o usuário clica fora do campo (Opcional, mas recomendado)
inputValor.addEventListener("blur", () => {
  if (inputValor.value === "") {
    inputValor.value = "0"; // Se ele não digitou nada, volta a ser 0
  }
});
