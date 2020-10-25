var motDePasse

var compteurErreur = 0;

motDePasse = prompt("indiquez un mot de passe");
while (motDePasse!== "patate"){

    motDePasse = prompt("indiquez un mot de passe");
    compteurErreur ++;


}

document.write("l'usager a entré    " + compteurErreur + "    mauvais mot de passe")
