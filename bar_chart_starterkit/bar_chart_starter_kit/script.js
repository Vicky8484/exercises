const list = document.querySelector("ul");
const valueArray = []; //erklærer tomt array


setInterval(generateColumns, 500); //Vi kalder generateColumns hvert falve sekund

function generateColumns(){
  const randomNumber = Math.floor(Math.random() * 101); // Vi får tal fra 0-100. Kunne også have sagt Math.round(Math.random() * 99)
  valueArray.push(randomNumber); //Hvert halve sekund bliver et random tal pushet ind i dette array
  
  if(valueArray.length > 20){ // Vi vil altid kun kunne se 20 elementer i arrayet, så de første elementer skal fjernes for at fastholde den længde
    console.log("Array er længere end 20");
    valueArray.shift(); //mens der hele tiden bliver tilføjet nye elementer, bliver det første element fjernet
    list.removeChild(list.firstElementChild); // Fjerner første søjle fra HTML
}
  
const li = document.createElement("li"); 
li.style.setProperty("--height", randomNumber);
list.appendChild(li);

console.log("Columns are being generated rn", valueArray);
}

