// ===  Opdracht 1 ===
// Maak een object met daarin jouw voornaam (string), achternaam (string), leeftijd (getal) en geboortedatum (date object). De datum hoeft niet geformat te worden.
// Log dit in de terminal.

console.log("Opdracht 1");
console.log("------------");
const person = {
  firstName: "Gwendolyn",
  lastName: "Janssen",
  age: 37,
  birthDate: new Date(1987, 9, 1),
};
console.log(person);
console.log("");

// ===  Opdracht 2 ===
// Zorg ervoor dat de volgende string in de terminal wordt gelogd:
// "Hoi! Ik ben <voornaam>, ik ben <leeftijd> jaar oud."
console.log("Opdracht 2");
console.log("------------");
console.log("Hoi! Ik ben " + person.firstName + " " + person.lastName + ", ik ben " + person.age + " jaar oud.");
console.log("");

// === Opdracht 3: bekijk het volgende object ===

const product = {
  productName: "Smeg Waterkoker",
  series: "Smeg jaren 50 retro lijn",
  material: ["roestvrijstaal", "kunststof"],
  color: "creme",
  wireless: false,
  "b-h-d": "17 x 24,6 x 22,3 cm",
};

// 3a. Log de naam van de serie in de terminal.
console.log("Opdracht 3a");
console.log("------------");
console.log(product.series);
console.log("");
// 3b. Overschrijf de oude waarde van de property color ("creme") naar "roze". Log het object in de terminal om te checken of het gelukt is.
console.log("Opdracht 3b");
console.log("------------");
console.log("Huidige waarde: " + product.color);
product.color = "roze";
console.log("Nieuwe waarde: " + product.color);
console.log("");
// 3c. Log de tweede materiaalsoort ("kunststof") in de terminal
console.log("Opdracht 3c");
console.log("------------");
console.log(product.material[1]);
console.log("");
// 1d. Log de afmetingen (b-h-d) in de terminal
console.log("Opdracht 3d");
console.log("------------");
console.log(product["b-h-d"])
console.log("");

// === Opdracht 4 ===
// Declareer een variabele met daarin een string die het product beschrijft. Gebruik hiervoor de properties productName en material uit het object.
// ---- Verwachte uitkomst:
// "De Smeg Waterkoker is gemaakt van roestvrijstaal en kunststof"

console.log("Opdracht 4");
console.log("------------");
const description = "De " + product.productName + " is gemaakt van " + product.material[0] + " en " + product.material[1] + ".";
console.log(description);
console.log("");

