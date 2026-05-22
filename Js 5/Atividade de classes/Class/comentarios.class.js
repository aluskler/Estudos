export default class Comentario {
  constructor(usuario, comentario) {
    this.usuario = usuario;
    this.comentario = comentario;
    this.dataDeCriacao = new Date();
  }
}
