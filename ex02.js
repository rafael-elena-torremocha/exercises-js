function comparative(diametro) {

    if (diametro <= 10) {
        console.log("es una rueda para un juguete pequeño");
    } else if (diametro < 20) {
        console.log("es una rueda para un juguete mediano");
    } else {
        console.log("es una rueda para un juguete grande");
    }
}

comparative(22);