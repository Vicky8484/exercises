"use strict";

// Start evt. med at lave en simpel HTML-struktur. Du skal have et navigationselement (<nav>) til at vise dine brødkrummepunkter, samt en knap til at udløse genereringen af brødkrummestien.
// Lav en funktion, der returnerer navnet på hvert punkt i brødkrummenavigationen i et liste-element med et tilhørende link. Det sidste punkt skal kun være tekst uden et link.
// Interaktion med knappen: Tilføj en event listener til din knap, så når den klikkes, vil din breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.
// Styling: Listeelementerne i brødkrummestien skal optræde på en række og være opdelt af en skråstreg (/) eller lignende symbol. Skråstregen skal ikke være en del af det klikbare link.

const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const button = document.querySelector("button");

button.addEventListener("click", addBreadcrumbsToPage);

function addBreadcrumbsToPage() {
    console.log("breadcrumbs ADDED");
    document.querySelector("ul").innerHTML = generateBreadcrumbPath();
}

function generateBreadcrumbPath() {
    return bc
        //.map(item => `<li><a href="${item.link}">${item.name}</a></li>`) //.map kalder hvert element item og henter linket ind i et a-tag og linkets navn ind imellem
        //.join("/"); //herefter bliver alle elementerne joinet i en string uden mellemrum

         .map((item, index) => index === bc.length - 1 //kalder hvert element item. Siger at hvis index er det sidte element i arrayet
            ? `<li>${item.name}</li>` //skal der ikke være link, kun navn
            : `<li><a href="${item.link}">${item.name}</a></li>`) //alle andre elementer får både navn og link
        .join("/");
    }