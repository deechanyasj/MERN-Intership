// Example: Check the age and print a message

let age = 25;

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else if (age >= 20 && age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// Another example using a switch statement
let day = 3; // 1=Monday, 2=Tuesday, etc.

switch (day) {
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    default:
        console.log("It's the weekend!");
        break;
}

// Ternary operator example
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
