//demander l'age
// >=18 : adulte
// >=12 <= 17 : adolescent
//<12 : enfant

var age

age = prompt("Indiquez votre age");
age = parseInt(age);

if( age >=18){
    reponse = "vous êtes un adulte";
}

if ( age >=12 && age <= 17){
    reponse = " vous êtes une adolescent folle ";
}

else {
    reponse = "vous êtes un enfant";
}

console.log ( reponse)