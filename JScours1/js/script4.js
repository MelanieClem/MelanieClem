//Cours 1, Exercice 4 :
//Calculer le salaire d'un employé

//demander le nombre d'heure
nombreHeure = prompt("Entrez votre nombre d'heure");
nombreHeure = parseFloat(nombreHeure);

//demander le taux horraire
tauxHorraire = prompt("Entrez votre taux horraire");
tauxHorraire = parseFloat(tauxHorraire);

//multiplier le nombre d'heure X le taux horraire
salairebrut=(nombreHeure*tauxHorraire);


console.log("votre salaire brut =" + salairebrut)