const devocales = { '4': 'a', '3': 'e', '7': 'i', '2': 'o', '1': 'u' };
const devoCAL= { '11': 'A', '12': 'E', '13': 'I', '14': 'O', '21': 'U' };

function letraSig(caracter) {
    let codigo = caracter.charCodeAt(0) + 1;
    if (caracter === 'z') {
        codigo = 'a'.charCodeAt(0);
    } else if (caracter === 'Z') {
        codigo = 'A'.charCodeAt(0);
    }
    return String.fromCharCode(codigo);
}

function descifrarTexto(texto) {
    let textoDescifrado = '';
    let i = 0;

    while (i < texto.length) {
        let caracter = texto[i];

        if (caracter === '*') {
            i++; 
            let cifradito= '';
            while (texto[i] !== '$') {
                cifradito += texto[i];
                i++;
            }
            cifradito = cifradito.trim();
            if (devocales.hasOwnProperty(cifradito)) {
                textoDescifrado += devocales[cifradito];
            } else if (devoCAL.hasOwnProperty(cifradito)) {
                textoDescifrado += devoCAL[cifradito];
            } else {
                textoDescifrado += parseInt(cifradito) / 5;
            }
        } else if ((caracter >= 'a' && caracter <= 'z' && !devocales.hasOwnProperty(caracter)) ||
                   (caracter >= 'A' && caracter <= 'Z' && !devoCAL.hasOwnProperty(caracter))) {
            textoDescifrado += letraSig(caracter);
        } else {
            textoDescifrado += caracter;
        }
        i++;
    }

    return textoDescifrado;
}

function descifra() {
    let texto = prompt("Ingrese su texto cifrado:");
    let resultado = descifrarTexto(texto);
    console.log('Texto descifrado:', resultado);
}
descifra();




