const boton = document.querySelector(".form__boton--glitter");
const contenedor = document.getElementById("particles-container");

boton.addEventListener("click", (e) => {
  e.preventDefault(); // ⛔ Evita que el formulario se envíe o recargue la página

  // ✨ Mostrar brillo
  boton.classList.add("brillar");

  // 💫 Ocultar brillo después de 1.5 segundos
  setTimeout(() => {
    boton.classList.remove("brillar");
  }, 1500);

  // 🎇 Crear partículas
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    const rect = boton.getBoundingClientRect();
    p.style.left = `${rect.left + rect.width / 2}px`;
p.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;

    p.style.setProperty("--x", Math.random());
    p.style.setProperty("--y", Math.random());

    contenedor.appendChild(p);

    // ❌ Borrar después de la animación
    setTimeout(() => p.remove(), 800);
  }
});