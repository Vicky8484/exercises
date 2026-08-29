// Her gemmer vi alle tekster på de tre sprog.
// "de", "da" og "en" er forkortelser for tysk, dansk og engelsk.

const allText = {
  de: {
    texts: [
      { text: "Sprache", location: ".header label" },
      { text: "Eine Seite mit 5 unterhaltsamen Fakten pro Tag. NIEMALS MEHR ALS 5!!!🏃🏾‍♀️ 🧌👾👹", location: ".footer p" },
      { text: "Bananen sind Beeren, Erdbeeren hingegen nicht. Botanisch gesehen entwickeln sich echte Beeren aus einer Blüte.", location: "main #article1 p"},
      { text: "Seeotter halten sich beim Schlafen an den Pfoten. Sie tun dies, damit sie im Wasser nicht voneinander wegtreiben.", location: "main #article2 p"},
      { text: "Honig verdirbt nicht und kann sehr lange halten.", location: "main #article3 p"},
      { text: "Kraken haben drei Herzen, weil ihr besonderes Blut zusätzliche Kraft benötigt, um Sauerstoff durch den Körper zu pumpen.", location: "main #article4 p"},
          { text: "Flamingos fressen kopfüber. Ihre speziell gekrümmten Schnäbel ermöglichen es ihnen, Schlamm und Wasser herauszufiltern, während ihr Kopf vollständig umgedreht ist.", location: "main #article5 p"}
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
      { text: "Havoddere holder hinanden i poterne, når de sover. Det gør de, så de ikke driver væk fra hinanden i vandet.", location: "main #article2 p"},
      { text: "Honning bliver ikke dårligt og kan holde sig meget længe.", location: "main #article3 p"},
      { text: "Blæksprutter har tre hjerter, fordi deres særlige blod kræver ekstra kraft for at pumpe ilt rundt i kroppen", location: "main #article4 p"},
          { text: "Flamingoer spiser med hovedet på hovedet. Deres særlige, buede næb gør det muligt for dem at filtrere mudder og vand fra, mens hovedet vender helt på hovedet.", location: "main #article5 p"}
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
      { text: "Sea otters hold hands when they sleep. They do this so they do not float away from each other in the water.", location: "main #article2 p"},
      { text: "Honey does not spoil and can last for a very long time.", location: "main #article3 p"},
      { text: "Octopuses have three hearts because their unique blood requires extra power to pump oxygen throughout the body.", location: "main #article4 p"},
    { text: "Flamingos eat upside down. Their special curved beaks let them filter out mud and water while their heads are completely inverted.", location: "main #article5 p"}
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
const locale = "da";

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


