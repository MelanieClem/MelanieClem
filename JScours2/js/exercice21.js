//demander le revenue
//revenu >= 7000: 16% revenu imposable
// revenu >7 à 14 000 inclus : 1120 +19.5%  du reste imposable
// revenu >14000 à 23 000 inclus : 2485 + 21.5% du reste
// revenu 23 000 à 50 000 inlus : 4420 + 24.5% du reste
// 50 000 et plus : 11035 + 26% du reste

var revenue
var impotProvinciale

revenue = prompt("indiquez le revenue");
revenue = parseFloat(revenue);

if (revenue >0 && revenue <= 7000){
    impotProvinciale= revenue*0.16;

    if ( revenue >7000 && revenue <= 14000){
    impotProvinciale = (((revenue-1120)*0.19)+1120);

    if (revenue > 14000 && revenue<=23000){
    impotProvinciale= (((revenue-2485)*0.215)+2485);

    if ( revenue >23000 && revenue <=50000) {
        impotProvinciale = (((revenue - 4420) * 0.245) + 4420);
    }}}}

else {
    impotProvinciale = (((revenue-11035)*0.26)+11035)
}

console.log (impotProvinciale)