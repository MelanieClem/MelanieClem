var tab2Exp = [];

for (i=0; i<16; i++){

    valeurAMettreDansLeTableau = Math.pow(2,i); // =1

    tab2Exp.push(valeurAMettreDansLeTableau);
}

for(i=0; i<tab2Exp.length; i++){
    document.write(tab2Exp[i]);
    document.write("<br>");
}
