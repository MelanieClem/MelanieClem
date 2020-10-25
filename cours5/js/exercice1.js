class JoueurHockey{
    constructor(nom, nbrButs, nbrPasses) {
        this.nom = nom;
        this.nbrButs = nbrButs;
        this.nbrPasses = nbrPasses;

    }

    affichyerNbPoints(){
        let textAAfficher = (this.nbrButs + this.nbrPasses).toString();
        document.write(textAAfficher +"<br>");
    }
    calculerNombreDePoints(){
        return this.nbrButs = this.nbrPasses;
    }
}

class Equipe{
    constructor(joueur1, joueur2, joueur3) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
    }
    afficherAlignement(){
        document.write(this.joueur1.nom + "<br>");
        document.write(this.joueur2.nom + "<br>");
        document.write(this.joueur3.nom + "<br>");
    }
    afficherPointsTotaux(){
        let pointEquipe = this.joueur1.calculerNombreDePoints() + this.joueur2.calculerNombreDePoints() +this.joueur3.calculerNombreDePoints();
        document.write(pointEquipe.toString());
    }

}

let Sydney = new JoueurHockey("Sydney Crosby", 454, 787);
let marioM = new JoueurHockey("Mario Lemieux", 690, 1033);
let JaromirJ = new JoueurHockey("Jaromir Jagr", 766, 1155);

let monEquipe = new Equipe(Sydney, marioM, JaromirJ);

monEquipe.joueur1.affichyerNbPoints()

Sydney.affichyerNbPoints();
marioM.affichyerNbPoints();
JaromirJ.affichyerNbPoints();
monEquipe.afficherAlignement();
monEquipe.afficherPointsTotaux();