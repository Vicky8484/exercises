"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const Animal = {
name: "-default name-",
desc: "-default desc-",
type: "-default type-",
age: 0
}; //prototype object


function start( ) {
    console.log("ready");

    // Add event-listeners to filter and sort buttons
    registerButtons();
    loadJSON();
}

function registerButtons(){
   document.querySelectorAll("[data-action='filter']")
   .forEach(button => button.addEventListener("click", selectFilter));
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // Create new object with cleaned data - and store that in the allAnimals array
        const animal = Object.create(Animal);

        // Extract data from json Object
        const fullname = jsonObject.fullname;

        const firstSpace = fullname.indexOf(" ");
        const secondSpace = fullname.indexOf(" ", firstSpace + 1);
        const lastSpace = fullname.lastIndexOf(" ");

        const name = fullname.substring(0, firstSpace);
        const desc = fullname.substring(secondSpace + 1, lastSpace)
        const type = fullname.substring(lastSpace);

        // console.log(`name: _${name}_
        //     desc: _${desc}_
        //     type: _${type}_`
        // ); //_ checks for whitespace

        // Put cleaned data into newly created Object

        animal.name = name;
        animal.desc = desc;
        animal.type = type;

        animal.age = jsonObject.age;

        // Add the pbject to the global array
        allAnimals.push(animal);
    
    });

    displayList();
}

function selectFilter(event){
    const filter = event.target.dataset.filter;
    console.log(`User selected ${filter}`);
    filterList(filter);
}

function filterList(filterBy){
    let filteredList = allAnimals; 
    if(filterBy === "cat"){
    //create filtered list of only cats
  filteredList = allAnimals.filter(isCat);
    } else if(filterBy === "dog"){
     //create filtered list of only dogs
  filteredList = allAnimals.filter(isDog);
    }

    displayList(filteredList);
}

function isCat(animal){
return animal.type === "cat";
}

function isDog(animal){
return animal.type === "dog";
}

function sortList(sortBy){
let sortedList = allAnimals;

if (sortBy === "name"){
   sortedList = sortedList.sort(sortByName);
} else if (sortBy === "type"){
sortedList = sortedList.sort(sortByType);
}
displayList(sortedList);
}

function sortByName(animalA, animalB){
    if(animalA.name < animalB.name){
      return -1;  
    } else {
        return 1;
    }
}

function sortByType(animalA, animalB){
    if(animalA.type < animalB.type){
      return -1;  
    } else {
        return 1;
    }
}

function displayList(animals) {
 // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    console.log("displayAnimal called with:", animal);
    
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

        // set clone data
        clone.querySelector("[data-field=name]").textContent = animal.name;
        clone.querySelector("[data-field=desc]").textContent = animal.desc;
        clone.querySelector("[data-field=type]").textContent = animal.type;
        clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


  // append clone to list
   