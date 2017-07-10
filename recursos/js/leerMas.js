// Java Script by Agustin Gonzalez

function muestra(numero)
{
    var elemento = document.getElementById("elementoAdicional_" + numero);
    elemento.className = "elementoVisible";

    var enlace = document.getElementById("enlaceLeerMas_" + numero);
    var funcion = "oculta(" + numero + "); return false;";
    enlace.setAttribute("onclick", funcion);
}

function oculta(numero)
{
    var elemento = document.getElementById("elementoAdicional_"+ numero);
    elemento.className = "elementoOculto";

    var enlace = document.getElementById("enlaceLeerMas_" + numero);
    var funcion = "muestra(" + numero + "); return false;";
    enlace.setAttribute("onclick", funcion);
}