const boton = document.querySelector(".form__boton--glitter");
const contenedor = document.getElementById("particles-container");

//Uncomment the lines below if you want to see the effect of the button without having to fill in all the required lines.
// boton.addEventListener("click", (e) => {
//   e.preventDefault(); 

  boton.classList.add("brillar");

  setTimeout(() => {
    boton.classList.remove("brillar");
  }, 1500);

  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    const rect = boton.getBoundingClientRect();
    p.style.left = `${rect.left + rect.width / 2}px`;
p.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;

    p.style.setProperty("--x", Math.random());
    p.style.setProperty("--y", Math.random());

    contenedor.appendChild(p);

    setTimeout(() => p.remove(), 800);
  }
//})
;