import { App } from "./App.js";

const app = new App();

app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Thiago Emanuel", "American", "...");

const authors = app.getAuthors();

app.createBook(
  "Os Dois Reis",
  ".....",
  "Fantasy Medieval",
  350,
  authors[0],
  "....",
  150,
  100,
);
app.createBook(
  "O Ladrão de Raios",
  "...",
  "fantasy",
  500,
  authors[1],
  "...",
  24.99,
  100,
);
app.createBook(
  "A Pirâmide Vermelha",
  "...",
  "fantasy",
  600,
  authors[1],
  "...",
  24.99,
  100,
);

const books = app.getBooks();

app.createUser("Thiago", "Thiagoemanoelbf@hotmail.com", "1234567");
const users = app.getUsers();

app.showDataBase();

const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[2],
    quantity: 1,
  },
];

app.createOrder(items, users[0]);

app.showDataBase();
