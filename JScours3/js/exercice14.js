let nombreUsager;
let compteurPositif = 0;
let compteurNegatif = 0;

//boucler jusqu'à ce que le dernier nombre soit zéro

nombreUsager = prompt("Indiquez un nombre");
while(nombreUsager > 0){
    nombreUsager = prompt("indiquez un nombre");
    compteurPositif ++;

    while(nombreUsager<0){
        nombreUsager= prompt("Indiquez un nombre");
        compteurNegatif ++
    }
}

document.write(" nombre d'essaie avec un chiffre positif :     " + compteurPositif + "<br>");
document.write(" nombre d'essaie avec un chiffre négatif" + compteurNegatif)



