
let number = prompt("What's your DNI number?");

if (number < 0 || number > 99999999) {
    window.alert("Numero no es válido!")
} else if (number.length !== 8) {
    window.alert("Numero no es válido!")
} else {
    let letra = prompt("Cual es la letra?")
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 
    'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    if (letra === letras[number % 23]) {
        window.alert("DNI válido") 
    } else {
        window.alert("DNI no válido")
    }
}
