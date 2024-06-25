const vocales = { 'a': 4, 'e': 3, 'i': 7, 'o': 2, 'u': 1 };
const voCal = { 'A': 11, 'E': 12, 'I': 13, 'O': 14, 'U': 21 };
function letraAnt(caracter) {
    let codigo = caracter.charCodeAt(0) - 1;
    if (caracter === 'a') {
        codigo = 'z'.charCodeAt(0);
    } else if (caracter === 'A') {
        codigo = 'Z'.charCodeAt(0);
    }
    return String.fromCharCode(codigo);
}

function modTexto(texto) {
    let textoCifrado = '';

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        if ((caracter >= 'a' && caracter <= 'z' && !vocales.hasOwnProperty(caracter)) ||
            (caracter >= 'A' && caracter <= 'Z' && !vocales.hasOwnProperty(caracter.toLowerCase()))) {
            textoCifrado += letraAnt(caracter);
        } else if (vocales.hasOwnProperty(caracter)) {
            textoCifrado += '*' + vocales[caracter] + '$';
        } else if (voCal.hasOwnProperty(caracter)) {
            textoCifrado += '*' + voCal[caracter] + '$';
        } else if (caracter >= '0' && caracter <= '9') {
            textoCifrado += '*' + (caracter * 5) + '$';
        }
 else {
            textoCifrado += caracter;
        }
    }
    return textoCifrado;
}

function pantalla() {
    let texto = prompt("Ingrese su texto:");
    let resultado = modTexto(texto);
    console.log('Texto modificado:', resultado);
}

pantalla();

