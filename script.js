// Función para encriptar el texto
function encryptText() {
    let input = document.getElementById("inputText").value;
    let encrypted = input.split('').map(char => {
        // Cambia cada letra por su código ASCII + 1
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }).join('');
    document.getElementById("outputText").value = encrypted;
}

// Función para desencriptar el texto
function decryptText() {
    let input = document.getElementById("outputText").value;
    let decrypted = input.split('').map(char => {
        // Cambia cada letra por su código ASCII - 1
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }).join('');
    document.getElementById("outputText").value = decrypted;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    outputText.select(); // Selecciona el texto en el textarea
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Alerta opcional para indicar que el texto fue copiado
    alert("Texto copiado al portapapeles: " + outputText.value);
}
