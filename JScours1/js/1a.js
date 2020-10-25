// lire un nombre

nombre = prompt("indiquez un nombre");
nombre= parseInt(nombre);

//équiation pour trouver le cube
resultat1 = Math.pow(nombre,2);

//équation pour trouver le cube
resultat2 = Math.pow(nombre,3);

//affficher le résultat
document.write(resultat1 + "<br>");
document.write(resultat2);