import Post from "./post.class.js";

export default class Autor {
  constructor(nome) {
    this.nome = nome;
    this.posts = [];
  }
  escreverPost(titulo, post) {
    const novoPost = new Post(titulo, post, this.nome);
    this.posts.push(novoPost);
    return novoPost;
  }
}
