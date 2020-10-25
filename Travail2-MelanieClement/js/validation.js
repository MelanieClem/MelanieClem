/* validation.js
Par Mélanie Clément
24 octobre 2020
 */

function validerFomulaire() {

    let codeRegional = document.getElementById("codeRegional");

    let codePermise = false;

    switch(codeRegional.value) {
        case "819":
            codePermise = true;
            break;
        case "418":
            codePermise = true;
            break;
        case "514":
            codePermise = true;
            break;
    }

    if(codePermise === false){
        alert("Code Régional non permis !!!! ");
    }
    return codePermise;
}