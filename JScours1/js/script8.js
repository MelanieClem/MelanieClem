// (? °F − 32) × 5/9 = 0 °C

tempFahrenheit = prompt (" Entrez une température en Fahrenheit");

tempFahrenheit = parseFloat(tempFahrenheit);


tempEnCelcius= ((tempFahrenheit - 32) * 5/9);

console.log(" Votre température en degré celcius   " + tempEnCelcius);