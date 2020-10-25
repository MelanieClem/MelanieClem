// variable
var motDePasse
var compteurErreur = 0;

// demander un mot de passe
motDePasse = prompt("indiquez un mot de passe");

// boucler le nombre de demande si le mmot de passe n'est pas bon
while (motDePasse!== "patate"){
    motDePasse = prompt("indiquez un mot de passe");
    compteurErreur ++;


}

//afficher le résultat
document.write("l'usager a entré    " + compteurErreur + "    mauvais mot de passe")