// premier jour depo = t0.1
// depot pendant 10 jours
// chaque jour depot de la veille
// afficher chaque jour / montnat du dépo / solde du compte


let depot = 0.01;
let compte = 0;

for (let i = 1; i <=10; i++){
    compte = compte + depot;



    document.write("   Jour" + i + "   ");
    document.write("   Montant déposé   " + depot.toFixed(2) + "<br>");
    document.write("   total de mon compte :    " + compte);

    depot = depot * 2;
    document.write("<br>")
}





// jour 1 = 0.1 *1 = y
// jour2 = 0.2*2 // y *2 z
//jour3 = 0.4
// jour4 = 0.8
//jour5 = 1.6
//jour6 = 3.2
//jour7 = 6.4
//jour8 = 12.8
//jour9 = 25.6
//jour10 = 51.2