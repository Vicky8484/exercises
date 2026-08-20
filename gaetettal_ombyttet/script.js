// Nu skal vi lave en “Gæt et tal” igen, men med rollerne byttet rundt:
// Det er nu computeren der skal gætte det tal mellem 0 og 100 du tænker på.
// Når du herefter klikker på en knap skal computeren komme med et kvalificeret gæt og det gæt skal vises på siden. 
// Der skal så være tre knapper hvor brugeren kan fortælle computeren om dens gæt er for højt, for lavt eller om den har gættet rigtigt.
// Der kan også være en knap til at starte det hele
// Computeren skal gætte tallet hurtigst muligt.
// Sørg for at man ikke kan klikke på knapper man ikke skal kunne klikke på.
// For at få inspiration til løsningen af opgaven kan i sætte jer sammen i grupper af to og analysere hvad der foregår når man leger gæt et tal.
// Hvordan gætter man tallet hurtigst og mest rationelt?

const computerGaet = document.querySelector("#computerGaet");
const startBtn = document.querySelector("#start-button");
const hojereBtn = document.querySelector("#higher-button");
const lavereBtn = document.querySelector("#lower-button");
const korrectBtn = document.querySelector("#correct-button");
const resultatContainer = document.querySelector("#result-container");
const spilIgenBtn = document.querySelector("#play-again-button");
const body = document.querySelector("body");

let lavesteTal;
let højesteTal;
let gaet;

function nytSpil() {
	lavesteTal = 1;
	højesteTal = 150;
	startBtn.disabled = true;
	hojereBtn.disabled = false;
	lavereBtn.disabled = false;
	korrectBtn.disabled = false;
	resultatContainer.classList.add("hidden");
	visNæsteGaet();
}

function visNæsteGaet() {
	if (lavesteTal > højesteTal) {// Hvis laveste tal er større end højeste tal, betyder det, at der er sket en fejl i gætningen
		computerGaet.textContent = "Jeg kan ikke finde tallet. Har du trykket forkert?";
		hojereBtn.disabled = true; // Deaktiver knapperne
		lavereBtn.disabled = true;
		korrectBtn.disabled = true;
		return; // Stop funktionen her, så der ikke fortsættes med at gætte
	}

	gaet = Math.floor((lavesteTal + højesteTal) / 2); // Gæt midtpunktet mellem laveste og højeste tal
	computerGaet.textContent = `Er dit tal ${gaet}?`; 
}

hojereBtn.addEventListener("click", () => { 
	lavesteTal = gaet + 1; // Hvis brugeren siger, at tallet er højere, skal vi opdatere laveste tal til at være gættet tal + 1
	visNæsteGaet();
});

lavereBtn.addEventListener("click", () => {
	højesteTal = gaet - 1; // Hvis brugeren siger, at tallet er lavere, skal vi opdatere højeste tal til at være gættet tal - 1
	visNæsteGaet();
});

korrectBtn.addEventListener("click", () => {
	computerGaet.textContent = `Dit tal var ${gaet}😛`;
	hojereBtn.disabled = true;
	lavereBtn.disabled = true;
	korrectBtn.disabled = true;
	resultatContainer.classList.remove("hidden");
    body.classList.add("party");
});

spilIgenBtn.addEventListener("click", () => {
	// location.reload(); // Genindlæs siden for at starte et nyt spil
        startBtn.disabled = false;
    startBtn.classList.remove("hidden");
    resultatContainer.classList.add("hidden");
    body.classList.remove("party");
    computerGaet.textContent = ``; // Tømmer computerens gæt
});

startBtn.addEventListener("click", nytSpil);

hojereBtn.disabled = true; // Deaktiverer knapperne ved start
lavereBtn.disabled = true;
korrectBtn.disabled = true;

