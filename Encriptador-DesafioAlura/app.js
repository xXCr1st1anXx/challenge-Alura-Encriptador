

let campoTexto = document.querySelector(".campoTexto");
let campoResultado = document.querySelector(".campoResultado");

let codigoMatrix = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function btnEncriptar() {
    let texto = encriptar(campoTexto.value);
    campoResultado.value = texto
    campoTexto.value = "";
    campoResultado.style.backgroundImage = "none";
}

function btnDesencriptar(){
    let texto = desEncriptar(campoTexto.value);
    campoResultado.value = texto
    campoTexto.value = "";
}

function encriptar(mensaje) {
    mensaje = mensaje.toLowerCase();
    for (let i = 0; i < codigoMatrix.length; i++) {
        if(mensaje.includes(codigoMatrix[i][0])) {
            mensaje = mensaje.replaceAll(codigoMatrix[i][0],codigoMatrix[i][1]);
        }
    }
return mensaje;
}     

function desEncriptar(mensaje){
    mensaje = mensaje.toLowerCase();
    for (let i = 0; i< codigoMatrix.length; i++) {
        if(mensaje.includes(codigoMatrix[i][1])) {
            mensaje = mensaje.replaceAll(codigoMatrix[i][1],codigoMatrix[i][0]);
        }
     }
return mensaje;
}

function copiarTexto(){
    var copy = document.getElementById("copiar");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    campoResultado.value = "";

}


