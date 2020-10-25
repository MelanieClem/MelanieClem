//lire une note d'exam
//afficher Échec <60
//afficher Bravo >=60

var note

note = prompt("indiquez votre note");
note = parseInt(note);

if(note>=60){
    reponse = "Bravo";
}

else {
    reponse = "Échec";
}

console.log ( reponse)