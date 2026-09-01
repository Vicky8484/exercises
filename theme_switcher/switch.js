// Find dropdown-menuen i HTML.
const themeSelect = document.querySelector("#theme-select");

// Find body
const body = document.querySelector("body");

body.dataset.theme = "light";

themeSelect.addEventListener("change", switchTheme);

function switchTheme(){
    const selectedValue = themeSelect.value;
    
    // Map dropdown values to theme names
    const themesList = {
        "dark": "dark",
        "light": "light",
        "hawaii": "hawaii"
    };
    
    const theme = themesList[selectedValue];
    
    body.dataset.theme = theme ? theme : body.dataset.theme;
}