// OPGAVE 1
// Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.
// Hint: use indexOf and substring 
// Expect the name to be a const - you can’t modify it.
// Console.log the three variables at the very end of your code.
// Remember that you may not use "magic numbers" in your code, so you have to create the program, so it finds the beginning and end of each part of the name.
// Also test the code with your own name (make up a middle name, if you don't have one) to ensure that it works for different lengths.

const fullName = "Victory Omoniyoyah Okosun";

const firstSpace = fullName.indexOf(" "); //indexOf(" ") finder første mellemrum
const secondSpace = fullName.indexOf(" ", firstSpace + 1); //indexOf(" ", firstSpace + 1) finder næste mellemrum

//substring(start, slut) tager den del af teksten, der ligger mellem disse positioner

const firstName = fullName.substring(0, firstSpace); //fullName.substring(0, firstSpace) = fra start til første mellemrum
const middleName = fullName.substring(firstSpace + 1, secondSpace); //fullName.substring(firstSpace + 1, secondSpace) = mellem første og anden mellemrumsposition. +1 betyder "flyt én karakter frem"
const lastName = fullName.substring(secondSpace + 1); //fullName.substring(secondSpace + 1) = fra anden mellemrumsposition til slut

console.log(firstName);
console.log(middleName);
console.log(lastName);

//Anden måde at gøre det på
const fName = fullName.substring(0, fullName.indexOf(" "));
console.log(fName);

//Tredje måde at gøre det på
console.log(fullName.split(" ")) //giver et array med navnene i som man kan arbejde videre med
const splittedStr = fullName.split(" ");
console.log(splittedStr);

// OPGAVE 2
// Where the middleName would end up being "Percival Wulfric Brian".
// You might need to use lastIndexOf in addition to indexOf.

const personName = "Albus Percival Wulfric Brian Dumbledore";

const space1 = personName.indexOf(" ");
const space2 = personName.lastIndexOf(" "); //henter det sidste mellemrum

const name1 = personName.substring(0, space1);
const name2 = personName.substring(space1 + 1, space2);
const name3 = personName.substring(space2 + 1);

console.log(name1);  // Albus
console.log(name2); // Percival Wulfric Brian
console.log(name3);   // Dumbledore

