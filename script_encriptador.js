const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#Encriptar");
const btnDesencriptar = document.querySelector("#Desencriptar");
const btnCopiar = document.querySelector("#botonCopiar")

function encriptar(){

    var mensaje = inputMensaje.value.toString();
    const validacion = new RegExp('[^a-z ]');
    console.log(validacion);
    if (!(validacion.test(mensaje))){

        var mensajeEncriptado = mensaje
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("o","ober")
        .replaceAll("a","ai")
        .replaceAll("u","ufat");
        console.log(mensajeEncriptado);

        document.getElementById("munheco").style.display = "none";
        document.getElementById("text1").style.display = "none";

        document.getElementById("botonCopiar").style.visibility = "visible";
    
    
        inputResultado.value = mensajeEncriptado;
        
    }
    else{
        alert("No se permiten mayusculas, números ni caracteres especiales")
    }
   
}

/*function encriptar(){

    var mensaje = inputMensaje.value.toString();
    let validacion = /[0-9\A-Z\!|@|#|$|%|^|&|*|(|)|_|+|-|=|?|<|>|,|.|;|:|'|"|~|á|é|í|ó|ú]/g;
    console.log(validacion.test(mensaje));
    var val1 = mensaje.match(validacion);
    console.log(val1);
    console.log(validacion.exec(mensaje));
    
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    console.log(mensajeEncriptado);

    document.getElementById("munheco").style.display = "none";
    document.getElementById("text1").style.display = "none";

    document.getElementById("botonCopiar").style.visibility = "visible";
    
    
    inputResultado.value = mensajeEncriptado;
}*/
function desencriptar(){


    var mensajeEncriptado = inputMensaje.value.toString();
    const validacion = new RegExp('[^a-z ]');
    console.log(validacion);
    if (!(validacion.test(mensaje))){

        var mensajeDesencriptado = mensajeEncriptado
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ober","o")
        .replaceAll("ai","a")
        .replaceAll("ufat","u");
    
        document.getElementById("munheco").style.display = "none";
        document.getElementById("text1").style.display = "none";
    
        
        document.getElementById("botonCopiar").style.visibility = "visible";
    
        inputResultado.value = mensajeDesencriptado.toLowerCase();
    }
    else{

        alert("No se permiten mayusculas, números ni caracteres especiales")
    }

}

function copy() {

    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio el texto")
    inputMensaje.value = "";
    inputMensaje.focus();
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copy;
