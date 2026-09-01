// Din opgave er at erstatte de "dårlige" ord med "gode" i teksten nedenfor med udgangspunkt i følgende datastruktur:
// Dette array viser, hvad de "dårlige" ord skal udskiftes med.
// Tekst: "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning."
// Start med at lave en simpel HTML-struktur. Du skal have et tekstafsnit (<p>) med ovenstående sætning, og en knap, som brugeren kan klikke på for at opdatere teksten med de "gode" ord.
// Lav en funktion, der erstatter de "dårlige" ord med de "gode" fra det udleverede array. Hvis teksten allerede er opdateret (ingen "dårlige" ord), skal der vises en <dialog>, der informerer brugeren om dette. Dette kan laves simpelt med et flag eller avanceret hvor teksten bliver undersøgt for om den indeholder nogle af de dårlige ord, og derfor har været igennem profanity filteret. 
// Tilføj en event listener til din knap. Når den klikkes, bør din ord-erstatningsfunktion blive kaldt, og teksten skal opdateres.
// Brug evt. CSS til at tildele en gul baggrund til de "gode" ord.
// Husk evt. at kommentere din kode for at forklare, hvordan de forskellige dele fungerer.

const curseWords = [  
    {    bad: "var",    good: "const",  },  
    {    bad: "float",    good: "grid",  },  
    {    bad: "marquee",    good: "just don't",  },
];

const goodBtn = document.querySelector("#goodBtn"); //knappen for gode ord
const badBtn = document.querySelector("#badBtn"); //knappen for dårlige ord
const sentence = document.querySelector("#sentence"); //sætningen

goodBtn.addEventListener("click", changeWords);
badBtn.addEventListener("click", changeWords2);

badBtn.disabled = true; //dårlige ord knap deaktiveret fra start

function changeWords(){
  // 1. Hent teksten fra HTML-elementet
  let text = sentence.textContent;
  
  // 2. Loop gennem hvert ord-par i arrayet og erstat
  curseWords.forEach(item => {
text = text.replace(item.bad, `<span class="goodWords">${item.good}</span>`);
  });
  
  // 3. Sæt den opdaterede tekst tilbage
  sentence.innerHTML = text; //kunne være sentence.textContent = text; men så kan man ikke bruge span og indsætte class'en

  badBtn.disabled = false;
  goodBtn.disabled = true;
}


function changeWords2(){
  // 1. Hent teksten fra HTML-elementet
  let text = sentence.textContent;
  
  // 2. Loop gennem hvert ord-par i arrayet
  curseWords.forEach(item => {
text = text.replace(item.good, `<span class="badWords">${item.bad}</span>`);
  });
  
  // 3. Sæt den opdaterede tekst tilbage
  sentence.innerHTML = text;
    goodBtn.disabled = false;
      badBtn.disabled = true;
}

// Initialize dårlige ord med .badWords styling ved side indlæsning
function initializeBadWords(){
  let text = sentence.textContent;
  
  curseWords.forEach(item => {
    text = text.replace(item.bad, `<span class="badWords">${item.bad}</span>`);
  });
  
  sentence.innerHTML = text;
}

// Run on page load
document.addEventListener("DOMContentLoaded", initializeBadWords);





// const bad = new RegExp(item.bad, 'gi');  // brug af new RegExp(pattern, flags) pattern, læs mere linje 57
// new RegExp(pattern, flags)
// RegExp står for regular expression
// funktionen henter parametre pattern og flags

// pattern er det vi vil finde
// flags er hvor og hvordan fx: "gi" 
//   (g = global dvs finder alle matches, ikke bare det første)
//   (i = case-insensitive dvs ignorere upper/lowercase forskelle)

// EKSEMPEL
//   const regex = new RegExp("var", "gi");
//   //Finder "var", "Var", "VAR", "vAr" etc., og erstatter dem ALLE
//   "var is Var and VAR".replace(regex, "const");
//   //Result: "const is const and const"

// Uden flags

// Intet g = kun første match bliver fundet
// Uden i = kun skrevet på nøjagtig samme måde bliver fundet