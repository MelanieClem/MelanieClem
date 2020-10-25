
//exercice 1 et 2 avec methode 1
let personne3 = {
    prenom: "Melanie",
    nom: "Clement",
    age: 43
};

for(let cle in personne3){
    document.write(cle.toString() +"   ");
    document.write( personne3[cle].toString()+ "<br>")
}
//----------------------------------------------

//exercice3 avec MÉTHODE 2
let personne4 = {};
personne4.prenom = "Coralie";
personne4.nom = "St-Cyr";
personne4.age = 16 ;


for(let cle in personne4){
    document.write(personne4[cle]+ " <br>");
}
//______________________________________________________

//exercice5 avec methode 1
let cartePokemon1 = {
    nom:"Pikachu",
    type:"Éclaire",
    hp:"50",
    nomAttaque1:"Agility",
    nomAttaque2:"Thundershock",
    degatsAttaque1:"0",
    degatsAttaque2:"20"
}
for(let cle in cartePokemon1) {
    document.write(cle.toString())
    document.write(cartePokemon1[cle].toString() + " <br>");
}

//exercice6 avec MÉTHODE 2
let cartePokemon2 = {};
cartePokemon2.nom = "Greninja";
cartePokemon2.type = "heart";
cartePokemon2.hp = "230" ;
cartePokemon2.nomAttaque1 = "Shriken Flurry";
cartePokemon2.nomAttaque2 = "Shadowy Hunter";
cartePokemon2.degatsAttaque1 = "110";
cartePokemon2.degatsAttaque2 = "220";


for(let cle in cartePokemon2) {
    document.write(cle.toString())
    document.write(cartePokemon2[cle].toString() + " <br>");
}