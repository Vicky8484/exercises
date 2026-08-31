// Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

const fname = "KLAUS";

console.log("3capitalized name:", fname.substring(0,2).toLowerCase());
console.log("3capitalized name:", fname.substring(2,3).toUpperCase());
console.log("3capitalized name:", fname.substring(3).toLowerCase());

console.log("3capitalized name:", `${fname.substring(0,2).toLowerCase()}${fname.substring(2,3).toUpperCase()}${fname.substring(3).toLowerCase()}`); //samler det hele

