export class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("Acesso permitido");
    } else {
      console.log("Acesso negado");
    }
  }
}
