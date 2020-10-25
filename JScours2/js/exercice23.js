var indicePollution
var listeA
var ListeB
var listeC

//génère un chiffre au hazzard entre 0 et 1
indicePollution = Math.random();
// arrondir a 2 chiffre après la virgule
indicePollution = indicePollution.toFixed(2)

document.write("l'indice de pollution est égale à :" + indicePollution);

if ( indicePollution > 0.04 && indicePollution <0.31){
    document.write("Normale")
}

else if (indicePollution >= 0.31 && indicePollution < 0.40){
 document.write("Avertir la liste A");
}

else if ( indicePollution >= 0.40 && indicePollution < 0.50){
    document.write("Avertir la liste A et B");
}

else if (indicePollution >= 0.50){
    document.write("Avertir la liste A et B et C")
}
else{
    document.write("valeur impossible")
}
