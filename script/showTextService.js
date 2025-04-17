
let btn = document.querySelector('.boton');
let texto = document.querySelector('.texto-services');

btn.addEventListener("click", () => {
    texto.classList.toggle("active");
});
