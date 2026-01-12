document.getElementById("loginForm").addEventListener("submit", function(e) {
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (email === "seba@wallet.cl" && password === "12345") {
    localStorage.setItem("login", true);
    localStorage.setItem("balance", 50000);
    window.location.href = "menu.html";
} else {
    document.getElementById("loginError").classList.remove("d-none");
}
});

