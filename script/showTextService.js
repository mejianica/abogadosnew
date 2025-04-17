let btns = document.querySelectorAll('.boton');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let texto = btn.nextElementSibling;
        texto.classList.toggle('active');
        
        if(btn.textContent === "Ver más"){
            btn.textContent = "Ver menos";
        }else{
            btn.textContent = "Ver más";
        }
    });
});
