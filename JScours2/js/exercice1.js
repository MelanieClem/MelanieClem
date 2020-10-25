//demandez à l'usager 2 nombres


var nombre1;
var nombre2;


nombre1 = prompt("Indiquez le premier nombre");
nombre2 = prompt("Indiquez le deuxième nombre");

nombre1 = parseFloat(nombre1)
nombre2 = parseFloat(nombre2)

//vérifier lequel est le plus grand
if(nombre1 > nombre2) {
    console.log(nombre1);
}

else if(nombre2 > nombre1){
    colsole.log(nombre2);
}
else{
    console.log("les deux nombres sont pareils");
}

