// Lav en funktion der console.logger et tilfældigt tal fra og med 0 til og med 100
// Opdater din funktion så den skriver det tilfædige tal til HTML.
// Opdater din funktionen så den kan modtage parameteret “max”. Det tilfældige tal skal så være fra og med 0 til og med “max”
// Opdater din funktion så den også modtager en querySelector som parameter som tallet skal udskrives til

console.log("HEJ Verden!");
document.querySelector(".h1").textContent = "Heyyyy!";
console.log(Math.floor(Math.random() * 100));

const tal = document.querySelector(".tal");
const feedback = document.querySelector(".feedback");
const cat = document.querySelector(".cat");

console.log(tal);

function TilfTal(max) {
  tal.textContent = Math.floor(Math.random() * (max + 1));
}

//gør at alle sted med classen "tal" får et tilfældigt tal fra 0 til max
// function TilfTal(max, selector) {
//   const elementer = document.querySelectorAll(selector);
//   const tilfældigtTal = Math.floor(Math.random() * (max + 1));

//   elementer.forEach(function (element) {
//     element.textContent = tilfældigtTal;
//   });
// }

function TjekTal() {
  if (Number(tal.textContent) == 10 || Number(tal.textContent) == 3) { 
    feedback.textContent = "Du har godt held!";
      feedback.classList.add("p2");
    cat.classList.remove("hide");
  } else if (Number(tal.textContent) < 10 && Number(tal.textContent) != 3) {
    feedback.textContent = "Prøv igen";
    feedback.classList.add("p2");
  }
}

TilfTal(10, ".tal");
TjekTal();