var randomNumber;
var nombreDe1 = 0;
var nombreDe0 = 0;

//boucle 100 fois
for(var i = 0; i < 100; i++){
    randomNumber = Math.round(Math.random());

    if(randomNumber === 0){
        nombreDe0++;
    }
    else{
        nombreDe1++;
    }
}


document.write("J'ai généré " + nombreDe0 + " 0 <br>");
document.write("J'ai généré " + nombreDe1 + " 1");
