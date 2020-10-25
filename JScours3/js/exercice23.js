var nombre = prompt("Entrez un nombre");

// var bonjour = "Bonjour";
//bonjour.length = 7
// bonjour[0] = "B";
// bonjour[1] = "o";
// bonjour[6] = "r"

for(i=0; i < nombre.length; i++ ){
    document.write(nombre[i]);
    document.write("<br>");

}

document.write("--------")
document.write("<br>")

for(i = nombre.length - 1; i >=0; i--){
    document.write(nombre[i]);
    document.write("<br>");

}