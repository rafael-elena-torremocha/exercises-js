var jugados = 0;
    var ganados = 0;
    var perdidos = 0;

    while ("Jugar de nuevo") {
        var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
        
        // GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
        var aleatorio = Math.floor((Math.random() * 9) + 1);
        var elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

	      // De aqui en adelante, rellena las plantillas de CODE con lo adecuado ;)
        if ((jugada == "piedra" ) && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        jugados++;

    };

    document.write("Partidas jugadas: "+jugados+"<br>");
    document.write("Partidas ganadas: "+ganados+"<br>");
    document.write("Partidas perdidas: "+perdidos+"<br>");
    document.write("Partidas empatadas: "+(jugados-ganados-perdidos));
