//demandez la température à l'usager

var temperature

temperature=prompt("Quel est la température aujourd'hui");
temperature = parseFloat(temperature)

if (temperature <= -10 && temperature>=-40) {
    console.log("HAAAAAA! il frait froid");
}

else {
    console.log("Enfin une belle journée")
}