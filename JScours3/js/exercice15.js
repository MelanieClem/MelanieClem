var chiffre = 1;
var compteurPositif=0;
var compteurNegatif=0;

while (chiffre!== 0){

    chiffre = parseInt(prompt("indiquez un nombre"));

    if(chiffre>0){
        compteurPositif++;
    }

    else if(chiffre < 0 ){
        compteurNegatif++
    }

}

document.write("l'usager a entré" + compteurPositif + "chiffre positifs.")
document.write("L,usager a entré" + compteurNegatif + "chiffre négatifs")
