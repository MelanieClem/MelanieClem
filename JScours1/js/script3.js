//Cours 1, Exercice 3 :
//Convertir un nombre de gallons en litres

//demander le nombre de gallon à notre usager
gallonEnLitre = prompt("Entrez le nombre de gallon");
gallonEnLitre = parseFloat(gallonEnLitre);

//litre 1 gallon = 4,55 litres
unGallon = parseFloat(4.55);

//multiplier le gallon X 4.55 litres
litre=(gallonEnLitre*unGallon);

console.log("gallon en litre =" + litre)
