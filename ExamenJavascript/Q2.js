// fait par Mélanie Clément
// le 17 septembre 2020

// question 2 Utilisez une variable nommée nb et 2 boucles for imbriquées pour produire le résultat
// suivant à l’aide d’un document.write.

let nb = 0;

for(let i = 0; i <10;i++){
    for(let j=0; j<20;j++){
        document.write(nb + " ");
        nb+=5;
    }
    document.write("<br>");
}