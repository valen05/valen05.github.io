const menu = document.querySelector ('.hamburguesa');
const navegacion = document.querySelector('.navegacion');

document.addEventListener ('DOMContentLoaded',()=>{
    eventos();
});


const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div')
    overlay.classList.add('pantalla-completa')
    const body = document.querySelector('body')
    body.appendChild(overlay)
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar)
    cerrarMenu(btnCerrar,overlay)
}

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}

/*overlay encabezado*/


/*menu*/

window.onload = function() {
    var botonesPlatillos = document.querySelectorAll(".botones-platillos button");
    var platillos = document.querySelectorAll(".platillo");
  
    // Evento de clic para filtrar los platillos por categoría
    for (var i = 0; i < botonesPlatillos.length; i++) {
      botonesPlatillos[i].addEventListener("click", function() {
        var categoria = this.getAttribute("class").split(" ")[0];
        
        // Mostrar solo los platillos de la categoría seleccionada
        for (var j = 0; j < platillos.length; j++) {
          if (platillos[j].getAttribute("data-platillo") === categoria || categoria === "todos") {
            platillos[j].style.display = "block";
          } else {
            platillos[j].style.display = "none";
          }
        }
      });
    }
  };
  

/*boton reserva*/
function redirigirPagina() {
    window.location.href="Gracias.html";
  }