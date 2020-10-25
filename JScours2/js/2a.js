// connaitre le montant des achats
let montantAchat = prompt("indiez le montant d'achat");
montantAchat = parseInt(montantAchat);


// calculer 15% pour les commandes de 200$ et plus
if ( montantAchat >=200){
    reponse = montantAchat*0.15;
    document.write(reponse)
}


else {
    document.write("vous n'avez pas d'escompte")}
