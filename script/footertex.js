let ver = document.querySelector("#texto");

function cambiaraorangered() {

  document.getElementById("texto").style.color = "orangered";
  
}
ver.addEventListener("mouseover", cambiaraorangered);


ver.removeEventListener("mouseout",cambiaraorangered );



