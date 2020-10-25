//demander une lettre de l'alphabet
//indiquer si c'est une voyelle ou consonne
// prendre les majuscule ou minuscule

var lettre

lettre = prompt("Indiquez une lettre de l'alphabet");
lettre = lettre.toUpperCase()

if (lettre === "a" || lettre === "e" || lettre === "i"|| lettre === "o"|| lettre === "u"|| lettre === "y"){
    console.log("ceci est une voyelle");
}

else {
    console.log ("ceci est une consonne");
}

