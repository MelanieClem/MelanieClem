var sexe
var age
var prime



sexe= prompt("indiquez votre age");
age = prompt("indiquez votre age");

if ( age < 16 || age > 120 ){
    console.log("age invalide");
}
else if (sexe !=="M" && sexe !== "F"){
    console.log("le sexe est invalide");
}

if(sexe.toUpperCase() === "F"){
    if(age >= 16 && age <= 25){
        prime=  3;
    }
    else{
        prime = 2;
    }
}

else{
    if(age >= 16 && age <= 25){
        prime = 5;
    }
    else{
        prime = 3;
}

console.log ("votre prime d'assurance est de" +  prime);

