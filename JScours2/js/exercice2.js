//réduction de 15% sur tout achat > 200.00$
//afficher le montant de la réduction

var montantAchat;
var reponse;

// demander le montant d'achat au client
montantAchat = prompt("Quel est le montant total de votre achat");
montantAchat = parseFloat(montantAchat);

if(montantAchat>200){
    reponse = montantAchat * 0.15;
    console.log("le montant d'escompte est de " + reponse + "$");
}

else{
    console.log("Vous n'avez pas le droit à l'escompte car votre achat est de 200.00$ ou moins");
}


