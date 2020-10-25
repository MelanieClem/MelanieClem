//fait par Mélanie Clément
//le 22 septembre 2020

//Question 4 : Chapitre 6 (les objets) (10 points)

//Créez une classe MonnaieVirtuelle. (0.5 point)
class MonnaieVirtuelle
{
    //Votre constructeur doit prendre en paramètres nomMonnaie, valeurEnUSD et actif
    //et calculer automatiquement actifUSD. (1.5 points)
    constructor(nomMonnaie, valeurEnUSD, actif)
    {
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = actif * valeurEnUSD;
    }
}

// Créez une classe Portefeuille. (0.5 point)
class Portefeuille
{
    constructor(nomProprietaire, tableauMonnaies)
    {
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }
//Une méthode nommée ValeurDuPortefeuille() qui explore le tableau tableauMonnaie et retourne le total de tous les actifUSD. (1 points)

    ValeurDuPortefeuille()
    {
        document.write("Longueur tableau:" + this.tableauMonnaies.lenght + "<br>");

        for(let i = 0; i < this.tableauMonnaies.length;i++)
        {

            document.write(this.tableauMonnaies[i].actifUSD + "  ");
            this.valeurDuPortefeuille += this.tableauMonnaies[i].actifUSD;
        }
        return this.valeurDuPortefeuille;
    }
}
/*Instanciez les monnaies suivantes :
  nomMonnaie = Bitcoin, valeurEnUSD = 9730, actif = 6 (0.5 point)
  nomMonnaie = Ethereum, valeurEnUSD = 194, actif = 20 (0.5 point)
  nomMonnaie = Litecoin, valeurEnUSD = 58, actif = 10 (0.5 point)*/

let nomMonnaie1 = new MonnaieVirtuelle("Bitcoin", 9730, 6);
let nomMonnaie2 = new MonnaieVirtuelle("Ethereum", 194, 20);
let nomMonnaie3 = new MonnaieVirtuelle("Litecoin", 58, 10);


let tableauMonnaies1 = [];

tableauMonnaies1[1] = nomMonnaie1;
tableauMonnaies1[2] = nomMonnaie2;
tableauMonnaies1[3] = nomMonnaie3;


/*Instanciez le portefeuille suivant :
  Shany Carle, un tableau qui contient toutes les monnaies précédentes. (0.5 point)*/

let PorteFeuille1 = new Portefeuille("Shany Carle", tableauMonnaies1);



//Faites afficher la valeur de mon portefeuille. (0.5 point)

document.write("Monaie1 :  " + nomMonnaie1.nomMonnaie +"  "+ (nomMonnaie1.valeurEnUSD+nomMonnaie1.actifUSD)+ "<br>");
document.write("Monaie2 :  " + nomMonnaie2.nomMonnaie +"  "+  (nomMonnaie2.valeurEnUSD+nomMonnaie2.actifUSD)+"<br>");
document.write("Monaie3 :  " + nomMonnaie3.nomMonnaie +"  "+  (nomMonnaie3.valeurEnUSD+nomMonnaie3.actifUSD)+"<br>");

