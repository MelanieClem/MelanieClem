//Cours 1, Exercice 1 :
//calculer le carré et le cube d'un nombre

//demander un nombre à notre usager
nombreACalculer = prompt("Entrez un nombre");  // "247"
nombreACalculer = parseInt(nombreACalculer); // 247

//retourner le carré du nombre
resultat1 = Math.pow(nombreACalculer,2);

//retourner le cube du nombre
resultat2 = Math.pow(nombreACalculer,3);

console.log(resultat1);
console.log(resultat2);
