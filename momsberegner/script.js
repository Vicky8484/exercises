// Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// Lav moms som et default parameter sat til 25.

function beregnBelobMedMoms(beloeb, moms = 25) { // Default parameter for moms er sat til 25
    const belobMedMoms = beloeb + (beloeb * (moms / 100)); // Beregn beløbet med moms ved at tilføje beløbet plus beløbet gange moms i procent
    console.log(`Beløbet med moms er: ${belobMedMoms}`); // Log resultatet til konsollen
    return belobMedMoms; // Returner beløbet med moms, hvis det ønskes at bruge det senere
}


const beloeb = 100; // Eksempel på beløb
beregnBelobMedMoms(beloeb); // Kald funktionen med standard moms (25%)
beregnBelobMedMoms(beloeb, 10); // Kald funktionen med 10% moms
beregnBelobMedMoms(beloeb, 33); // Kald funktionen med 33% moms