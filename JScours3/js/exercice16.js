let nombreAleatoire= 0
let nombreUsager= 0
let pointage


nombreUsager = prompt("Indiquez un nombre entre 0 et 1")

for (i=0;i<10;i++){
    nombreAleatoire = Math.round(Math.random())


    if(nombreUsager !== nombreAleatoire){
        nombreUsager = prompt("Indiquez un nombre entre 0 et 1")
        nombreUsager++
    }
    else {
        nombreAleatoire++
    }
}

document.write(nombreAleatoire+ "<br>")
document.write(nombreUsager)

// faire une boucle 10 fois

// nombre aléatoire entre 0 et 1

// demander aussi a l'usage un nombre entre 0 et 1

//si le nombre est identique vous gagnez si non perdez

// afficher le pointage à la fin

