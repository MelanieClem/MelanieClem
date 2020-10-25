//afficher nombre impair 1 à 49
// afficher 5 valeur par ligne

let col = 0

for (let i = 0 ; i <= 995 ; i += 5){


    document.write ( i.toString() + "   ")


    if (col === 20){
        document.write("<br>");
        col = 0
    }
    else{
        col++
    }
}


