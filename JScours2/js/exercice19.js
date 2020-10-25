//demander un montant d'achat
// escompte de 12% si achat > 500

var montantAchat

montantAchat= prompt("Indiquez le montant d'achat");
montantAchat= parseFloat(montantAchat);

if (montantAchat>=500){
    console.log ("votre achat avec escompte est de : " + (montantAchat - (montantAchat*0.12)) + "$");
}

else {
    console.log (montantAchat + "$   Vous n'avez aucun escompte");
}