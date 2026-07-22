/*slider de productos*/
var contenedor = document.querySelector('.slider');
var botonizquierda = document.getElementById("boton-izquierda");
var botonderecha = document.getElementById("boton-derecha");

botonderecha.addEventListener("click", function() {
    contenedor.scrollLeft += contenedor.offsetWidth;
});

botonizquierda.addEventListener("click", function() {
    contenedor.scrollLeft -= contenedor.offsetWidth;
});


