//lire 3 nombres

var nombre1
var nombre2
var nombre3

nombre1 = prompt("indiquez un premier nombre");
nombre2 = prompt("indiquez un deuxième nombre");
nombre3 = prompt("indiquez un troisième nombre");


console.log("voici votre nombre le plus petit"  + Math.min(nombre1, nombre2, nombre3));

console.log(" voici votre nombre le plus grand"  + Math.max(nombre1, nombre2, nombre3));
