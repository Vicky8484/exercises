//1. Lav en funktion der console.logger et tilfældigt tal fra og med 0 til og med 100
//2. Opdater din funktion så den skriver det tilfædige tal til HTML.

import { dqs } from "../utils_lib/bibliotek.js"; //importerer "TilfTal" funktionen
import { TilfTal } from "../utils_lib/bibliotek.js";


const gæt = dqs(".gæt");
const tallet = TilfTal(5);
const knap = dqs(".button");
const feedback = dqs(".feedback");
const kitty = dqs(".bear");

console.log(tallet);

knap.addEventListener("click", TjekTal);

function TjekTal() {
  if (Number(gæt.value) < tallet) { 
    feedback.textContent = "Du har gættet for lavt";
  } else if (Number(gæt.value) > tallet) {
    feedback.textContent = "Du har gættet for højt";
  } else if (Number(gæt.value) == tallet) {
    feedback.textContent = "Du har gættet rigtigt!";
    kitty.style.display = "initial";
  }

  //hvis tallet er mindre end gættet, så skrives "Du har gættet for lavt"
  //hvis tallet er større end gættet, så skrives "Du har gættet for højt"
  //hvis tallet er lig med gættet, så skrives "Du har gættet rigtigt"
}

// function TilfTal(max) {
//   return Math.floor(Math.random() * max);
// } kan fjernes, fordi den importeres fra bibliotek.js

// console.log(gæt);
// console.log(typeof gæt.value);
// console.log(Number(gæt.value));
// console.log(typeof Number(gæt.value));