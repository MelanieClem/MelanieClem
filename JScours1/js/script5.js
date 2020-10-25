//Cours 1, Exercice 5 :
//Calculer la vie de quelqu'un en nombre de jour

//demander le nom de la personne
prenom = prompt("Entrez votre nom");


//demande l'age de la personne
age = prompt("Entrez votre age");
age = parseInt(age);


//multiplier le nombre d'heure X le taux horraire
nombreDeJour=(age*365);



console.log(prenom +"    vous avez vécu jusqu'à maintenant :   " + nombreDeJour + "  jours.")