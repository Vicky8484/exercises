// Her gemmer vi alle tekster på de tre sprog.
// "de", "da" og "en" er forkortelser for tysk, dansk og engelsk.

const allText = {
  de: {
    texts: [
      { text: "Sprache", location: ".header label" },
      { text: "Eine Seite mit 5 unterhaltsamen Fakten pro Tag. NIEMALS MEHR ALS 5!!!🏃🏾‍♀️ 🧌👾👹", location: ".footer p" },
      { text: "Spiky ventured onto the ancient bridge, his tiny paws echoing softly. The milk awaited on the other side—his prize, his dream. Halfway across, the Hog-Gobbler emerged from the shadows, a grotesque creature of matted fur and hunger. Its claws scraped the stone. "Your spines won't save you," it snarled. Spiky didn't run. Instead, he curled tight into a gleaming ball of spikes and rolled directly at the beast. The Hog-Gobbler yelped, leaping aside in pain as spines pierced its paws. Dazed and defeated, the creature retreated into the darkness. Spiky uncurled and scurried onward. Soon he reached the cup of milk, lapping it gratefully. He'd crossed the bridge, defeated his foe, and won his victory.
A hedgehog's courage knows no bounds.", location: "main #article1 p"},
    ],
    options: [
      { value: "", text: "--Sprache wählen--" },
      { value: "de", text: "Deutsch" },
      { value: "en", text: "Englisch" },
      { value: "da", text: "Dänisch" },
    ],
  },
  da: {
    texts: [
      { text: "Sprog", location: ".header label" },
      { text: "En side med 5 fun facts om dagen. ALDRIG MERE END 5!!!🏃🏾‍♀️ 🧌👾👹", location: ".footer p" },
      { text:"Bananer er bær, men jordbær er ikke bær. Botanisk set udvikler ægte bær sig fra en blomst med ét frugtknudeanlæg og har frøene indeni.", location: "main #article1 p"},
    ],
    options: [
      { value: "", text: "--Vælg sprog--" },
      { value: "de", text: "Tysk" },
      { value: "en", text: "Engelsk" },
      { value: "da", text: "Dansk" },
    ],
  },
   en: {
    texts: [
      { text: "Language", location: ".header label" },
      { text: "A page with only 5 fun facts each day. NEVER more than 5w!!!🏃🏾‍♀️ 🧌👾👹", location: ".footer p" },
      { text:"Bananas are berries, but strawberries are not. Botanically, true berries grow from a flower with one ovary and keep their seeds inside.", location: "main #article1 p"},
    ],
    options: [
      { value: "", text: "--Choose language--" },
      { value: "de", text: "German" },
      { value: "en", text: "English" },
      { value: "da", text: "Danish" },
    ],
  },
};

// Det sprog siden starter med.
const locale = "en";

// Find dropdown-menuen i HTML.
const languageSelect = document.querySelector("#language-select");

// Denne funktion skifter alle tekster på siden.
function changeLanguage(locale) {
  
  // Går gennem alle tekster for det valgte sprog.
  allText[locale].texts.forEach((item) => {
    // Finder det rigtige HTML-element og indsæt teksten.
    document.querySelector(item.location).textContent = item.text;
  });

  // Fjern de gamle sprogvalg fra dropdown-menuen.
  languageSelect.replaceChildren();

  // Lav nye sprogvalg på det valgte sprog.
  allText[locale].options.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.text;
    languageSelect.append(option);
  });

  // Vis det valgte sprog i dropdown-menuen.
  languageSelect.value = locale;
}

// Kør funktionen, når brugeren vælger et nyt sprog.
languageSelect.addEventListener("change", (event) => {
  changeLanguage(event.target.value || "da" || "en");
});

// Skift siden til startsproget, når den indlæses.
changeLanguage(locale);


