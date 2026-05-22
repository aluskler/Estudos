import { Author } from "./Class/author.js";
import { Book } from "./Class/book.js";
import { Order } from "./Class/order.js";
import { Poster } from "./Class/poster.js";
import { User } from "./Class/user.js";
import { Database } from "./Database.js";

export class App {
  static #dataBase = new Database();

  createUser(name, email, passworld) {
    const user = new User(name, email, passworld);
    App.#dataBase.saveUsers(user);
  }
  getUsers() {
    return App.#dataBase.find("users");
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#dataBase.saveAuthor(author);
  }
  getAuthors() {
    return App.#dataBase.find("authors");
  }

  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock,
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock,
    );
    App.#dataBase.saveBook(book);
  }
  addBook(BookName, quantity) {
    App.#dataBase.addBooksToStock(BookName, quantity);
  }
  getBooks() {
    return App.#dataBase.find("books");
  }

  createPost(name, description, height, width, price, inStock) {
    const post = new Poster(name, description, height, width, price, inStock);

    App.#dataBase.savePost(post);
  }
  addPost(post, quantity) {
    App.#dataBase.addPostToStock(post, quantity);
  }
  getPosters() {
    return App.#dataBase.find("posters");
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#dataBase.saveOrder(order);

    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#dataBase.romoverBooksToStock(product.title, quantity);
      } else if (product instanceof Poster) {
        App.#dataBase.removerPostToStock(product.name, quantity);
      }
    });
  }

  showDataBase() {
    App.#dataBase.showStorage();
  }
}
