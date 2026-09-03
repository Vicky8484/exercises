//Data Viz Opgave
//fetch følgende i et interval (10 sek) https://kea-alt-del.dk/kata-distortion/
//Din opgave er at visualisere attributen inQueue
//1. Den simple: Vis tallet
//2. Den federe: lad tallet vokse hver gang det skifter og falde tilbage til sin oprindelige størrelse

//hints: brug animationend eller transitionend til at fjerne class / data-attribut
//3. Den fedeste / mest kreative: Go crazy, visualiser over tid, CSS craziness, knock yourselves out

/*{
  "id": 168909,
  "inQueue": 10,
  "loggedAt": "2026-09-03 07:35:16",
  "personel": [
    "Peter",
    "Jonas",
    "Dannie"
  ],
  "name": "FooBar"
}*/

// Henter data fra en URL og sender resultatet videre til en funktion.
function loadJSON(url, callback) {
    // fetch sender en forespørgsel til serveren.
    fetch(url)
    // Laver svaret om fra JSON-tekst til et JavaScript-objekt.
    .then( response => response.json() )
    // Kalder callback-funktionen med de hentede data.
    .then( jsonData => callback(jsonData));
}

// Adressen på API'et, som vi henter kø-tallet fra.
const url = "https://kea-alt-del.dk/kata-distortion/";

// Henter data med det samme, når siden indlæses.
loadJSON(url, visKø);
// Henter nye data hver 100 millisekunder.
setInterval(() => loadJSON(url, visKø), 100);

// Viser kø-tallet på siden og starter animationen, når tallet ændrer sig.
function visKø(data){
  // Finder HTML-elementet, hvor tallet skal vises.
  const tal = document.querySelector("#visTal");

  // Stopper funktionen, hvis tallet er det samme som sidst.
  if (tal.textContent === String(data.inQueue)) {
    return;
  }

  // Sætter det nye kø-tal ind i HTML-elementet.
  tal.textContent = data.inQueue;
  // Fjerner animationen, så den kan startes forfra.
  tal.classList.remove("vokser");
  // Tvinger browseren til at genberegne layoutet.
  void tal.offsetWidth;
  // Tilføjer CSS-klassen, som starter animationen.
  tal.classList.add("vokser");
  // Fjerner klassen igen, når overgangen er færdig.
  tal.addEventListener("transitionend", () => {
    tal.classList.remove("vokser");
  }, { once: true });

}