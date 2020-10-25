var nombreA
var nombreB

nombreA = prompt("indiquez un nombre");
nombreA = parseInt(nombreA);
nombreB = prompt("indiquez un deuxième nombre");
nombreB = parseInt(nombreB)



if  (nombreA < nombreB){
    reponse  = nombreA.toString() + nombreB.toString();
}

else if (nombreA > nombreB) {
    reponse = nombreB.toString() + nombreA.toString();
}

else{
    reponse = "erreur deux nombres égales";
}

console.log( reponse);