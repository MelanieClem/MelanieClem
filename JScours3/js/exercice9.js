//transférer les valeur fahrenheit de 10 à 20 en celsuium par trande de 1
//(Fahrenheit - 32) * 5/9;

var Celsius = 0

for (var i = 10; i<= 20; i++) {

    Celsius = (i-32)* (5/9);

    document.write (" la valeur du  " +i + "Fahrenheit est " + Celsius +"Celsus")
    document.write ("<br>")
}

