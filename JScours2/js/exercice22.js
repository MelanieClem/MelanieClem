var couleurFond
var couleurTexte

couleurFond = prompt("choisisez une couleur ")
couleurTexte = prompt("choisez la couleur du texte")


function myFunction() {
    document.body.style.backgroundColor = couleurFond;
    document.getElementById("b1").style.color = couleurTexte;

}

