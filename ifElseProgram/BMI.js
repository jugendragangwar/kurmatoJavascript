import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function BodyMassIndex(heightInFeet, weightInKg) {
  const heightInMeter = heightInFeet * 0.304; // Convert meters to feet
  const BMI = weightInKg / (heightInMeter * heightInMeter);
  console.log(BMI);
}

rl.question('Enter your Weight in Kg : ', (weight) => {
  const weightInKg = parseFloat(weight);
  rl.question('Enter your Height in Feet: ', (height) => {
    const heightInFeet = parseFloat(height);
    BodyMassIndex(heightInFeet, weightInKg);
     // Call the BodyMassIndex function
    rl.close(); // Close the readline interface
  });
});