let note


note = prompt("Indiquez votre note ici");
note = parseFloat(note)

if(note >= 90) {
    document.write(" Votre note est : " + "A");
    }
    else if (note >=80){
    document.write("Votre note est : " + "B");
    }
    else if (note >= 70){
    document.write("Votre note est : " + "C");
        }
    else if (note >= 60){
    document.write("Votre note est : " + "D")
            }

else{
    document.write (" Votre note est : " + "E")
}