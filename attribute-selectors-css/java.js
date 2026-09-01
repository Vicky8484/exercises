const btn = document.querySelector("#btn");
const box = document.querySelector("#box");

btn.addEventListener("click", switchTheme);

function switchTheme(){

// div.dataset.filter="cat"; //skifter den én gang

//toggler den
// if(div.dataset.filter ==="fox"){
//     div.dataset.filter = "cat";
// } else{
//   div.dataset.filter = "fox";
// }

//toggler med ternary i stedet for if-sætning
const currentFilter = box.dataset.filter
box.dataset.filter = currentFilter === "fox" ? "cat" : "fox";

//condition ? trueValue : falseValue

}