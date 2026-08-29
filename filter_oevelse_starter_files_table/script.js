// 1. Lav nogle hardcodede filtreringer:
// en der viser alle el drevne fartøjer
// en der viser alle fartøjer med mere end 2 sæder
// alle fartøjer el-drevne fartøjer ejet af Jonas
// alle rugbrøds drevne fartøjer med plads til mere end en.
// 2. Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true. Disse if statements kunne laves som ternary’er
// Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)
// Style tabellen 

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"], price: 16000},
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus", price: 5000},
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true, price: 2},
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true, price: "free"},
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda", price: 700},
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true, price: "negotiable"},
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda", price: 133 },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge", price: 874},
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas", price: 1234},
  { type: "Løbehjul", passengers: 1, isElectric: true, price: 1},
];
const tbodyPointer = document.querySelector("tbody");

//hardcodede filtreringer
const elVehicles = vehicles.filter((vehicle) => vehicle.isElectric === true); //får fat i alle elektriske køretøjer
const moreThanTwoSeatVehicles = vehicles.filter((vehicle) => vehicle.passengers > 2); //får fat i alle køretøjer med mere end 2 sæder
const elJonasVehicles = vehicles.filter((vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas"); //får fat i de køretøjer som er elektriske og ejet af Jonas
const rugbrodVehicles = vehicles.filter((vehicle) => vehicle.passengers > 1 && vehicle.fuel === "Rugbrød");
const kosterMindreVehicles = vehicles.filter((vehicle) => vehicle.price < 1000);

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type ? each.type : ""}</td>
  <td>${each.fuel ? each.fuel : "🤷‍♀️"}</td>
  <td>${each.passengers ?? ""}</td> 
  <td>${each.stops ? each.stops : ""}</td>
  <td>${each.ownedBy ? each.ownedBy : ""}</td>
  <td>${each.isElectric ? "Yes" : ""}</td>
  <td>${each.isTandem ? "Yup" : ""}</td>
  <td>${each.price ? each.price : ""}</td>
</tr>`; //Bruger ternaries til fx at sige hvis isElectric er true vises der kryds, hvis ikke vises der ikke noget
  });
}

//knapper med data attributer
//vi laver et object, der linker data attributterne til de hardcodede filtreringer
const filters = { 
  elektrisk: elVehicles,
  mereEnd2: moreThanTwoSeatVehicles,
  elJonas: elJonasVehicles,
  rugbrod: rugbrodVehicles,
  mindre: kosterMindreVehicles,
  alle: vehicles,
};



//vi henter alle knapperne og siger, at for hver knap skal der være en event listener
//som peger til skemaets indre html og skifter indholdet ud vha showTheseVehicles()
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {

    document.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("clickedBtn");
    }); //fjerner class fra alle knapper til at starte med, så farven bliver væk hver gang man trykker på noget andet

    button.classList.add("clickedBtn");
    tbodyPointer.innerHTML = "";
    showTheseVehicles(filters[button.dataset.filter]); //button.dataset.filter læser værdien fra knappen
  });
});

//${each.passengers ?? ""} nullish coalescing i stedet for normal ternary
