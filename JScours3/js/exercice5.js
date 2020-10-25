// faire un programme qui affiche 100 nombre aléatoire 0 ou 1
// compter le nombre de 0 et de 1
var randomNumber;
var nombreDe0 = 0;
var nombreDe1 = 0;

for(var i =0; i<100; i++){
    randomNumber= Math.round(Math.random());


    if(randomNumber === 0){
        nombreDe0 ++;
    }
    else{
        nombreDe1 ++;
    }
}

document.write(" j'ai " + nombreDe1 + "fois des 1"+ "<br>");
document.write("j'ai " + nombreDe0 + "fois des 0");

