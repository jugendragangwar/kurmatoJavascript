// const readline = require('readline');
import readline from 'readline'

// Create an interface for reading input from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function TicketPrice(age) {

    if (age < 12) {
        console.log("The Ticket Price is 5");
    }
    else if (age >= 12 && age < 18) {
        console.log("The Ticket Price is 10");
    }
    else if (age >= 18 && age <= 60) {
        console.log("The Ticket Price is 20");
    }
    else if (age > 60) {
        console.log("The Ticket Price is 15");
    }
}



rl.question('Enter a number: ', (input) => {
    const number = parseFloat(input); // Convert input to a floating-point number
    const result = TicketPrice(number);
    console.log(result);
    rl.close(); // Close the readline interface
})