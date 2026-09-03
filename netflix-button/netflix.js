// Lav en html-side med en knap på
// Knappen skal have en animation der udfylder den med en farve fra venstre til højre 
// Animationen skal starte når siden loader
// Hvis brugeren intet foretager sig (ingen cursor bevægelser mm) kører animationen i knappen til enden og en interaktion skal ske med siden,
// fx at den ændrer baggrundsfarve og knappen forsvinder eller at der navigeres til en ny side. Dette skal selvfølgelig også ske hvis brugeren klikker på knappen.
// Hvis brugeren bevæger cursoren (musen), skal animationen i knappen køre til enden men der skal intet ske, med mindre man klikker på knappen 

// Find knappen på siden.
const button = document.querySelector("button");

// Find linket rundt om knappen, så vi kan gå til den næste side.
const link = button.closest("a");

// Holder styr på, om brugeren har flyttet musen.
let mouseMoved = false;

// Ved den første musebevægelse markeres siden som interageret.
document.addEventListener("mousemove", () => {
	mouseMoved = true;
}, { once: true }); // "once" betyder, at lytteren kun kører én gang.

// Kører, når CSS-animationen på knappen er færdig.
button.addEventListener("animationend", (event) => {
	// Gør intet, hvis det er en anden animation, eller musen er flyttet.
	if (event.animationName !== "fill-button" || mouseMoved) {
		return;
	}

	// Hvis brugeren ikke flyttede musen, åbnes næste episode automatisk.
	window.location.href = link.href;
});

