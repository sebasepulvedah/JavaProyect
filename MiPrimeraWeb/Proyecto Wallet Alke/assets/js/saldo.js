document.getElementById("saldo").innerText =
"$" + localStorage.getItem("balance");

function logout() {
localStorage.clear();
window.location.href = "login.html";
}
