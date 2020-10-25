var tableau = [];
var compteurfaux = 0;

// boucle doit boucler 1000x donc for

for( i = 0; i < 1000; i++){

    var bool;

    bool = (Math.round(Math.random()) !== 0);
    tableau.push(bool);
}
//[true,false, true,true,true,false,....]

//prend un compteur pour compter le nombre de faux par exemple

for( i = 0; i < 1000; i++){
    if(tableau[i] === false){
        compteurfaux++;
    }
}

document.write("Dans le tableau il y a exactement" + compteurfaux.toString() + "faux");
document.write("Dans le tableau il y a exactement" + (1000 - compteurfaux).toString() + "vrai");
