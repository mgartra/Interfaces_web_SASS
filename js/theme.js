// Seleccionar el botón de cambiar tema
const themeToggle = document.getElementById("theme-toggle");

// Verificar si el usuario ya tiene un modo guardado
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Evento de clic para cambiar de tema
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia del usuario en localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
// Seleccionar el botón de hamburguesa y el menú principal
const menuToggle = document.getElementById("menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");

// Evento de clic para mostrar/ocultar el menú
menuToggle.addEventListener("click", () => {
  menuPrincipal.classList.toggle("active");
});
