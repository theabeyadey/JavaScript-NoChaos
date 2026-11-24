const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a positive number: "));
let sum = 0 + number;
let counter = 1;

while (number != -1) {
    number = Number(prompt("Enter a positive number(Enter -1 to stop): "));
    sum += number;
    counter += 1
    
    let average = sum / counter;
    
    console.log("Average is: " + average);
}
