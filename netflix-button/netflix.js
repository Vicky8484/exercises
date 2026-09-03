// Lav en html-side med en knap på
// Knappen skal have en animation der udfylder den med en farve fra venstre til højre 
// Animationen skal starte når siden loader
// Hvis brugeren intet foretager sig (ingen cursor bevægelser mm) kører animationen i knappen til enden og en interaktion skal ske med siden,
// fx at den ændrer baggrundsfarve og knappen forsvinder eller at der navigeres til en ny side. Dette skal selvfølgelig også ske hvis brugeren klikker på knappen.
// Hvis brugeren bevæger cursoren (musen), skal animationen i knappen køre til enden men der skal intet ske, med mindre man klikker på knappen 

const button = document.querySelector("button");
const link = button.closest("a");
let mouseMoved = false;

document.addEventListener("mousemove", () => {
	mouseMoved = true;
}, { once: true });

button.addEventListener("animationend", (event) => {
	if (event.animationName !== "fill-button" || mouseMoved) {
		return;
	}

	window.location.href = link.href;
});

