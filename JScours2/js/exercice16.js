// demander 2 nombres
//>= 10 : faire la somme
//< 10 : faire le produit

var nombre1
var nombre2

nombre1= prompt("Indiquer un premier nombre");
nombre1= parseFloat(nombre1)

nombre2= prompt("indiquer un deuxieme nombre");
nombre2= parseFloat(nombre2)

if ( nombre1 && nombre2 >=10){
    console.log("la somme est de : " + (nombre1+nombre2));
}

else {console.log("le produit est de : " + (nombre1-nombre2));
}