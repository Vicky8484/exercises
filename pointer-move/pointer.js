//Lav en html side der detekterer musens X-position og opdaterer en CSS custom property der styrer lightness i en HSL color.
//Ekstra: Opdater fx Saturation, HSL, med musens Y-position
//SPOILER ALERT, HINTS LÆNGERE NEDE

document.addEventListener("pointermove", function (event) {
    const lightness = event.clientX / window.innerWidth * 100; // X-position bliver til HSL-lysstyrke
    const saturation = event.clientY / window.innerHeight * 100; // Y-position bliver til HSL-mætning
    
    const red = Math.round(event.clientX / window.innerWidth * 255); // X-position styrer rød
    const green = Math.round(event.clientY / window.innerHeight * 255); // Y-position styrer grøn
    const blue = 255 - red; // Blå bliver mindre, når rød bliver større

    document.documentElement.style.setProperty(
        "--lightness",
        `${lightness}%`
    );

    document.documentElement.style.setProperty(
        "--saturation",
        `${saturation}%`
    );

    document.documentElement.style.setProperty("--red", red); // Opdaterer tekstens røde værdi
    document.documentElement.style.setProperty("--green", green); // Opdaterer tekstens grønne værdi
    document.documentElement.style.setProperty("--blue", blue); // Opdaterer tekstens blå værdi
});

//event.clientX er musens vandrette position (X-position) fra venstre side af viewporten
//Når den divideres med vinduets bredde, får man et tal mellem 0 og 1, som derefter omregnes til 0%-100%.

//clientY er lodret position fra toppen af viewporten

//event er et objekt, som JavaScript automatisk sender med, når en hændelse sker.
//I dette tilfælde er hændelsen, at musen bevæger sig
//event indeholder information om bevægelsen, for eksempel:
//Navnet event er selvvalgt. Kunne også kalde det e eller mouseEvent

//style.setProperty(--blank, blank) henter CSS stylingen (variablen) og 
//const variablen som indeholder farvens værdi