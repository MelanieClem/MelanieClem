// lire un nombre
// dire si positif, negatif ou zéro

var nombre

nombre = prompt("indiquez un nombre");
nombre = parseInt(nombre);

if ( nombre >= 1){
    reponse = nombre +" est un nombre positif";
}

else if (nombre <= -1) {
    reponse = nombre + " est un nombre négatif";
}

else {
    reponse = nombre + " est zéro donc ni positif ni négatif";
}

console.log (reponse)