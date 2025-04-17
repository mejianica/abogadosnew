let btns = document.querySelectorAll('.boton');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let texto = btn.nextElementSibling;
        texto.classList.toggle('active');
    });
});
