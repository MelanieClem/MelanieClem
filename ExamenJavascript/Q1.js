//fait par Mélanie Clément
//le 18 septembre 2020

// Question 1 : Chapitre 1 et 2 (opérations lecture/écriture et SI) (5 points)
// Exemple :
// type = “eau” face face → 400 de dégâts
// type = “ténèbre” pile face → 100 dégâts


let typePokemon = prompt("Indiquez le type de pokemon eau ou feu") // eau ou feu
let dommage = 100
let randomNumber = 0

// Pour cela, il faut lire le type du pokémon adverse. Si c’est de type eau, les dommages
// seront doublés car les pokémons du type eau ont une faiblesse contre le feu.
if ( typePokemon === "eau" ){

// Il faut ensuite faire pile ou face. Pour cela, il faut générer un nombre aléatoire entre
// 0 et 1. Si c’est face (1), l’attaque fait 100 de dégâts. Si c’est faux l’attaque fait 0 dégât.

    for(let i=0; i<2; i++){
        randomNumber=Math.round(Math.random());

        if(randomNumber ===1 ){
            calculDomage= dommage * 2;
        }
        else{
            calculDomage = dommage
        }
    }
}
else {
    calculDomage = dommage
}

// Répétez les opérations pour le second lancé.

if ( typePokemon === "eau" ){
    for(let i=0; i<2; i++){
        randomNumber=Math.round(Math.random());

        if(randomNumber ===1 ){
            calculDomage1= dommage * 2;
        }
        else{
            calculDomage1 = dommage
        }
    }
}
else {
    calculDomage1 = dommage
}

document.write("les dommanges des deux attaques sont  : " + (calculDomage+calculDomage1))