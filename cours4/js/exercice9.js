var tableau = [];

for (i = 0; i < 10; i ++) {

    var chiffre = prompt("veuillez entrer un nombre");
    chiffre = parseInt(chiffre);
    tableau.push(chiffre);
}


var lepluspetit = tableau[0];
var leplusgrand = tableau[0];

for( i = 1 ; i < tableau.length; i ++){
    if(tableau[i]> leplusgrand){
        leplusgrand = tableau[i];
    }

    else if(tableau[i] < lepluspetit){
        lepluspetit = tableau[i]
    }
}

document.write("le plus petit chiffre estÉ " + lepluspetit.toString() + "<br>")
document.write("le plus petit chiffre estÉ " + leplusgrand.toString() + "<br>")


