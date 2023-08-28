const button = document.getElementById("container");
const boton = document.getElementById("boton");

boton.addEventListener("click", ()=> {
    event.stopPropagation()
    alert("Hola");
})

container.addEventListener("click", (event) => {
    alert("Hola! Soy el div");
});

