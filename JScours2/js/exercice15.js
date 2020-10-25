// calculer la surface d'un rectangle
// indiquer seulement si au moins 100

var hauteur
var largeur
var perimetre

hauteur = prompt("Indiquez la hauteur du rectangle");
largeur = prompt ("indiquez la largeur du rectangle")

if(hauteur*largeur >= 100){
    perimetre = hauteur*largeur;
}

else{
    perimetre = "désolé le périmètre est plus petit que 100"
}


console.log (perimetre);
