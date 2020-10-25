var nomUtilisateur //admin
var motDePasse  //12345

nomUtilisateur= prompt("Nom d'utilisateur");

motDePasse = prompt("Mot de passe");

if (nomUtilisateur === "admin" && motDePasse === "12345"){
    console.log("Bonjour  " + nomUtilisateur)
}

else {
    console.log(" Votre nom d'utilisateur ou mot de passe est invalide")
}