import Comentario from "./comentarios.class.js";

export default class Post {
  constructor(titulo, post, autor) {
    this.titulo = titulo;
    this.post = post;
    this.autor = autor;
    this.comentarios = [];
    this.dataDeCriacao = new Date();
  }
  addComentario(usuario, comentario) {
    this.comentarios.push(new Comentario(usuario, comentario));
  }
}
