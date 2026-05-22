const form = document.getElementById("registroForm");
const mensagemDiv = document.getElementById("mensagem");

// Função para validar nome
const validarNome = (nome) => {
  if (!nome || nome.trim() === "") {
    throw new Error("Nome é obrigatório. Por favor, preencha este campo.");
  }
};

// Função para validar email
const validarEmail = (email) => {
  if (!email || email.trim() === "") {
    throw new Error("Email é obrigatório. Por favor, preencha este campo.");
  }

  const regexEmail = /^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  if (!regexEmail.test(email)) {
    throw new Error(
      "Email inválido! Use o formato: xx@xx.xx (exemplo: usuario@dominio.com)",
    );
  }
};

// Função para validar senha
const validarSenha = (senha) => {
  if (!senha || senha === "") {
    throw new Error("Senha é obrigatória. Por favor, preencha este campo.");
  }

  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*]).{8,}$/;
  if (!regexSenha.test(senha)) {
    throw new Error(
      "Senha inválida! Deve conter:\n" +
        "• Pelo menos 8 caracteres\n" +
        "• Pelo menos uma letra maiúscula\n" +
        "• Pelo menos uma letra minúscula\n" +
        "• Pelo menos um número\n" +
        "• Pelo menos um caractere especial (@#$%^&*)",
    );
  }
};

// Função para exibir mensagem
const exibirMensagem = (mensagem, tipo) => {
  mensagemDiv.textContent = mensagem;
  mensagemDiv.classList.remove("success", "error");
  mensagemDiv.classList.add(tipo);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    // Valida todos os campos
    validarNome(nome);
    validarEmail(email);
    validarSenha(senha);

    // Se todas as validações passarem
    exibirMensagem(
      `Bem-vindo, ${nome}! Registro realizado com sucesso.`,
      "success",
    );
    form.reset();
  } catch (erro) {
    // Captura e exibe o erro para o usuário
    exibirMensagem(erro.message, "error");
  }
});
