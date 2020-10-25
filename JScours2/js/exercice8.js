var tauxHorraire
var nombreDHeure
var salaire
var heureSupplementaire

nombreDHeure = prompt("Combien vous avez travaillé d'heure");
nombreDHeure = parseFloat(nombreDHeure);

tauxHorraire = prompt("Quel est votre taux horraire");
tauxHorraire = parseFloat(tauxHorraire);

if(nombreDHeure > 40){
    heureSupplementaire = nombreDHeure - 40;
    salaire= ((heureSupplementaire*tauxHorraire)*2)+(40 * tauxHorraire);
    console.log ("Votre salaire est de " + salaire);
}
else {
    salaire= nombreDHeure * tauxHorraire;
    console.log ("Votre salaire est de " + salaire);
}
