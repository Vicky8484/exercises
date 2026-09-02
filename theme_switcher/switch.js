const themeSelect = document.querySelector("#theme-select"); // Find dropdown-menuen i HTML.
const body = document.querySelector("body");

body.dataset.theme = "light"; //er theme light til at starte med

themeSelect.addEventListener("change", switchTheme); //eventlistener på options i selectoren

//funktion der ændre tema
function switchTheme(){
    const selectedValue = themeSelect.value; //selectedValue er = den option der er valgt i selectoren
    
    // Mapper dropdown values til tema navne
    const themesList = {
        "dark": "dark",
        "light": "light",
        "hawaii": "hawaii"
    };
    
    const theme = themesList[selectedValue]; //finder temaet ud fra den valgte option og gemmer det i variablen theme
    
    body.dataset.theme = theme ? theme : body.dataset.theme; //sætter data-theme på body til det valgte tema. Hvis temaet ikke findes, beholder den nuværende tema
}