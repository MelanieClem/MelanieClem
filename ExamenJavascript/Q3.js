//fait par Mélanie Clément
//le 19 septembre 2020

//Question 3 : Chapitre 5 (les tableaux) (5 points) •

// Créez un tableau nommé tabChance qui contient 100 nombres aléatoires entre 1 et 200. (4 points) •
let tabChance = [];
let nombrePresent


for(let i = 0; i<100; i++){
    tabChance[i] = (Math.floor(Math.random() * 200) +1 );
}

// Demandez un nombre à l’usager entre 1 et 200. (1 point) •
let nombre = prompt("Indiquez un nombre entre 0 et 200");


// Parcourez le tableau pour savoir si le nombre se trouve dans le tableau et
nombrePresent = false;

for (let i=0; i<100;i++){
    if(nombre === tabChance[i].toString()){
        nombrePresent = true
    }
}

// confirmez la réponse à l’usager. (5 points)
if (nombrePresent===true){
    document.write("votre nombre " + nombre +" est dans le tableau")
}

else{
    document.write( "votre nombre " + nombre + "  n'est pas dans le tableau")
}

