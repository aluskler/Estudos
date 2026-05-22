export class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  findBookByTitle(bookTitle) {
    return this.#storage.books.find((b) => b.title === bookTitle);
  }

  saveBook(book) {
    const bookExists = this.findBookByTitle(book.title);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookByTitle(bookName);
    book?.addToStock(quantity);
  }

  romoverBooksToStock(bookName, quantity) {
    const book = this.findBookByTitle(bookName);
    book?.removeFromStock(quantity);
  }

  findPosstByTitle(post) {
    return this.#storage.posters.find((p) => p.title === post);
  }

  savePost(post) {
    const postE = this.findPosstByTitle(post);
    if (!postE) {
      this.#storage.posters.push(post);
    }
  }
  addPostToStock(post, quantity) {
    const postE = this.findPosstByTitle(post);
    postE?.addToStock(quantity);
  }
  removerPostToStock(post, quantity) {
    const postE = this.findPosstByTitle(post);
    postE?.removeFromStock(quantity);
  }

  saveUsers(user) {
    const userE = this.#storage.users.find((u) => u.email === user.email);
    if (!userE) {
      this.#storage.users.push(user);
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
}
