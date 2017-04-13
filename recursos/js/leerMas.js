// Java Script by Agustin Gonzalez

function muestra() {
    var elemento = document.getElementById("elementoAdicional");
    elemento.className = "elementoVisible";

    var enlaceMas = document.getElementById("enlaceLeerMas");
	enlaceMas.className = "elementoOculto";
	
	 var enlaceMenos = document.getElementById("enlaceLeerMenos");
	enlaceMenos.className = "elementoVisible";	
}

function oculta() {
    var elemento = document.getElementById("elementoAdicional");
    elemento.className = "elementoOculto";

    var enlaceMas = document.getElementById("enlaceLeerMenos");
	enlaceMas.className = "elementoOculto";
	
	var enlaceMenos = document.getElementById("enlaceLeerMas");
	enlaceMenos.className = "elementoVisible";
}