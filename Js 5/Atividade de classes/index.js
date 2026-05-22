import Autor from "./Class/autor.class.js";

const thiago = new Autor(`Thiago`);

const post = thiago.escreverPost(`Jogos`, `o novo RE9 é incrivel...`);

post.addComentario(`Aluskler`, `Concordo de mais`);
post.addComentario(`Alusu`, `Concordo tambem`);
console.log(thiago);
console.log(post);
