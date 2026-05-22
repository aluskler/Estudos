import { User } from "./user.js";
import { Produto } from "./produto.js";

const aluskler = new User("Thiago Emanuel", "Teste@gmail.com", "Thi");

const livro = new Produto("livro1", "descricao do livro", 200);

livro.addEstoque(10);
livro.calcularDesconto(20);

console.log(livro);

aluskler.login("Teste@gmail.com", "Thi");
