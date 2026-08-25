const list = document.querySelector("ul"); //henter html element "ul", så vi kan putte noget i
const valueArray = []; //erklærer tomt array


setInterval(generateColumns, 500); //Vi kalder generateColumns hvert halve sekund

function generateColumns(){
  const randomNumber = Math.floor(Math.random() * 101); // Vi får tal fra 0-100. Kunne også have sagt Math.round(Math.random() * 99)
  valueArray.push(randomNumber); //Hvert halve sekund bliver et random tal pushet ind i dette array
  
  if(valueArray.length > 20){ // Vi vil altid kun se 20 elementer i arrayet, så de første elementer skal fjernes for at fastholde den længde
    valueArray.shift(); //for hvert nyt element der bliver tilføjet, bliver det første element fjernet, når der er 20 elementer i arrayet
    list.removeChild(list.firstElementChild); // Fjerner første søjle fra HTML, når der er 20 elementer i arrayet
}
  
const li = document.createElement("li"); //vi skaber li'er her i stedet for at lave dem i html
li.style.setProperty("--height", randomNumber); //vi styler li'er, hvor randomNumber bestemmer højden og dermed farven
list.appendChild(li); //vi sætter li elementet som er stylet med CSS på hver gang der bliver tilføjet et nyt element

console.log("Columns are being generated rn", valueArray);
}

