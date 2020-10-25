// lire une lettre
// w = avancer
// a = gauche
// s = reculer
// d = droite
// si autre chose erreur



var lettre= prompt("demander une lettre");

lettre = lettre.toUpperCase()

if( lettre === "W"){
    document.write("Avancer");
}

else if ( lettre === "A"){
    document.write("Gauche");
}

else if ( lettre === "S"){
    document.write("Reculer")
}

else if ( lettre === "D"){
    document.write("Droite")
}

else {
    document.write("Erreur")
}

