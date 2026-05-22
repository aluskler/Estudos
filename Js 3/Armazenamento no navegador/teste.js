document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é: ", info);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert("O texto salvo no local storage é: " + t);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");

  localStorage.setItem("text", input.value);
  input = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert(`O texto salvo no local é ${t}`);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2022, 9, 9) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");

  const cookie = "info = " + input.value + ";";
  const data = new Date();
  data.setDate(data.getDate() + 5);
  const expiration = "expires = " + data + ";";
  const path = "path=/;";

  document.cookie = cookie + expiration + path;
  input = "";
  console.log(document.cookie);
});
