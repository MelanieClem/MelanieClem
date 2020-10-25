//demandez 2 nombres à l'usager
// diviser le premier par le deuxième
// le deuxième doit être plus grand que 0

var nombre1;
var nombre2;
var reponse;

nombre1 = prompt("Indiquer un premier nombre");
nombre2 = prompt("Indiquer un deuxième nombre");
reponse = nombre1 / nombre2

nombre1 = parseInt(nombre1)
nombre2 = parseInt(nombre2)


if( nombre2 >0){
    console.log (" le résultat de la division est " + reponse)
}

else{
    console.log ("Division par zéro interdite")
}

