NomDeLarticle = prompt("Entrez le nom de l'article");
prix= prompt("Son prix");

prix= parseFloat(prix);

prixDuGros= prix * 0.66;

profit = prix - prixDuGros;

console.log("l'article : " + NomDeLarticle + "a coute: " + prixDuGros + " à produire.");
console.log("Le profit réalisé est de : " + profit)
