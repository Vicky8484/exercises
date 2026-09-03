//Lav en html side der detekterer musens X-position og opdaterer en CSS custom property der styrer lightness i en HSL color.
//Ekstra: Opdater fx Saturation, HSL, med musens Y-position
//SPOILER ALERT, HINTS LÆNGERE NEDE

document.addEventListener("pointermove", function (event) {
    const lightness = event.clientX / window.innerWidth * 100;
        const saturation = event.clientY / window.innerHeight * 100;

    document.documentElement.style.setProperty(
        "--lightness",
        `${lightness}%`
    );

    document.documentElement.style.setProperty(
        "--saturation",
        `${saturation}%`
    );
});

//event.clientX er musens vandrette position (X-position) fra venstre side af viewporten
//Når den divideres med vinduets bredde, får man et tal mellem 0 og 1, som derefter omregnes til 0%-100%.

//clientY er lodret position fra toppen af viewporten

//event er et objekt, som JavaScript automatisk sender med, når en hændelse sker.
//I dette tilfælde er hændelsen, at musen bevæger sig
//event indeholder information om bevægelsen, for eksempel:
//Navnet event er selvvalgt. Kunne også kalde det e eller mouseEvent