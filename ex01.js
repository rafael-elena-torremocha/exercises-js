/* Ejericios condicionales */

function miFuncionDeComparar(numero1, numero2) {

    if (numero1 === 5) {
        console.log("numero1 es estrictamente igual a 5");
    }
    if (numero1 <= numero2) {
        console.log("numero1 no es mayor que numero2");
    }
    if (numero2 > 0) {
        console.log("numero2 es positivo");
    }
    if (numero1 < 0 || numero1 !== 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
}

miFuncionDeComparar(4, -2);

