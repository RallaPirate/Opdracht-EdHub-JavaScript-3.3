// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================

console.log("Opdracht 1");
console.log("------------");
const birthyearHousehold = [1949, 1950, 1987, 1987];
console.log(birthyearHousehold);
console.log("");

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================

console.log("Opdracht 2");
console.log("------------");
const myHobbies = ["Dieren verzorgen", "Tekenen", "Series kijken"];
console.log(myHobbies);
console.log("");

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================

console.log("Opdracht 3a");
console.log("------------");
const numbers = [3, 4, 5, 7, 2]
console.log("De array bevat: " + numbers);
console.log("");
console.log("Opdracht 3b");
console.log("------------");
console.log(numbers[0]);
console.log("");

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================

console.log("Opdracht 4a");
console.log("------------");
const colors = ["groen", "geel", "rood", "paars", "blauw", "oranje"];
console.log("De array bevat de volgende kleuren: " + colors);
console.log("");
console.log("Opdracht 4b");
console.log("------------");
console.log("De vijfde waarde uit de array is " + colors[4]);
console.log("");
console.log("Opdracht 4c");
console.log("------------");
console.log("De tweede waarde uit de array is " + colors[1]);
console.log("");

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
console.log("Opdracht 5a");
console.log("------------");
const numbers5 = [21, 22, 23, 25, 25];
console.log(numbers5);
console.log("");
console.log("Opdracht 5b");
console.log("------------");
console.log("De vierde waarde van de reeks is: " + numbers5[3]);
numbers5[3] = 24;
console.log("De vierde waarde is nu veranderd in: " + numbers5[3]);
console.log("Opdracht 5c");
console.log("------------");
console.log("Dus de reeks wordt nu:")
console.log(numbers5);
console.log("");

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================

console.log("Opdracht 6a");
console.log("------------");
const ingredients = ["bladerdeeg", "knoflook", "spinazie"]
console.log("Ingrediënten: " + ingredients);
console.log("");
console.log("Opdracht 6b");
console.log("------------");
ingredients[0] = "lasagnebladen"
console.log("Gewijzigde ingrediënten: " + ingredients);
console.log("");
console.log("Opdracht 6c");
console.log("------------");
console.log("Aantal benodigde ingrediënten: " + ingredients.length);
console.log("");