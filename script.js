let btn_encriptar = document.getElementById('btn_encriptar');
let img_muñeco = document.getElementById('img_muñeco');
let text_muñeco = document.getElementById('text-no-encontrado');
let ver_texto = document.getElementById('ver-texto');

let textArea = document.getElementById('entrada_de_texto');
let h3_salida_de_texto = document.getElementById('salida_de_texto');

function encriptar() {
    ocultar_contenido();

    let entrada_de_texto = procesarTexto(textArea.value)
    let salidad_texto = "";

    for (let i = 0; i < entrada_de_texto.length; i++) {

        if (entrada_de_texto[i] === "a") {
            salidad_texto = salidad_texto.concat("", "ai")
        }
        else if (entrada_de_texto[i] === "e") {
            salidad_texto = salidad_texto.concat("", "enter")
        }
        else if (entrada_de_texto[i] === "i") {
            salidad_texto = salidad_texto.concat("", "imes")
        }
        else if (entrada_de_texto[i] === "o") {
            salidad_texto = salidad_texto.concat("", "ober")
        }
        else if (entrada_de_texto[i] === "u") {
            salidad_texto = salidad_texto.concat("", "ufat")
        } else {
            salidad_texto = salidad_texto.concat("", entrada_de_texto[i])
        }
    }

    h3_salida_de_texto.innerHTML = salidad_texto;
}


function desencriptar() {
    ocultar_contenido();

    let texto = procesarTexto(textArea.value)
    let salidad_texto = "";


    for (let i = 0; i < texto.length; i++) {

        if (texto[i] == "a" && texto[i + 1] == "i") {
            salidad_texto += texto[i]
            i = i + 1
        } else if (texto[i] == "e" && texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
            salidad_texto += texto[i]
            i = i + 4
        } else if (texto[i] == "i" && texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
            salidad_texto += texto[i]
            i = i + 3
        } else if (texto[i] == "o" && texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
            salidad_texto += texto[i]
            i = i + 3
        } else if (texto[i] == "u" && texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
            salidad_texto += texto[i]
            i = i + 3
        } else {
            salidad_texto += texto[i]
        }
    }

    h3_salida_de_texto.innerHTML = salidad_texto;
}

function copiar() {

    var contenidoH3 = h3_salida_de_texto.textContent;

    // Crear un elemento de texto temporal
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = contenidoH3;
    document.body.appendChild(elementoTemporal);

    // Seleccionar el contenido del elemento temporal
    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el contenido al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemporal);

    // Mostrar la tarjetica temporal
    var tarjetica = document.getElementById("tarjetica");
    tarjetica.style.display = "block";

    // Ocultar la tarjetica después de 3 segundos (3000 milisegundos)
    setTimeout(function () {
        tarjetica.innerHTML = "¡ Texto copiado !";
        tarjetica.style.display = "none";
    }, 2000);

}

function procesarTexto(texto) {
    // Eliminar acentos y caracteres especiales
    var textoProcesado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Convertir a minúsculas
    textoProcesado = textoProcesado.toLowerCase();

    // Verificar si el texto original es diferente al procesado
    if (texto !== textoProcesado) {

        // Mostrar la tarjetica temporal
        var tarjetica = document.getElementById("tarjetica");
        tarjetica.innerHTML = "El texto contenia caracteres especiales , mayusculas o acentos";
        tarjetica.style.display = "block";

        // Ocultar la tarjetica después de 3 segundos (3000 milisegundos)
        setTimeout(function () {
            tarjetica.style.display = "none";
        }, 4000);

    }

    return textoProcesado;
}

function ocultar_contenido() {
    if (img_muñeco.parentNode && text_muñeco.parentNode) {
        img_muñeco.parentNode.removeChild(img_muñeco);
        text_muñeco.parentNode.removeChild(text_muñeco)
    }
    ver_texto.style.display = "flex";
}


