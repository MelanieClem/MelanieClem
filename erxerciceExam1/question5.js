let tabEntier = []

for(let i=0; i<95; i ++){
    tabEntier[i] = i ;
}
tabEntier[0]= 8;

document.write(tabEntier[4])




/*___________________________________*/

let tabJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", 'Samedi', "Dimanche"];

for(var i = 0 ; i< tabJours.length;i++){
    docuement.write(tabJours[i] +"<br>")
}


/*_____PERMUTER_________________________*/

let tab = [100,200,300, 400,500]

let temp = tab[1]; //stock la valeur200
tab[1] = tab[2];
tab[2] = temp;
