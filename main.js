//Declare variables for use in Kanye message script
//Set name of user for greeting
const username = 'Will';
//Store quote possibilites as an array
const kanyeQuotes = [
    `If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.`,
    `Love your haters, they’re your biggest fans.`,
    `I don’t care about what people think, because people don’t think.`,
];
const randomIndex = 0;

const greeting = () => {
    console.log(`Hello, ${username}! Here is your Kanye quote:`);
}
//Greet user to the program
greeting();
console.log(`Testing index 2: ${kanyeQuotes[2]}`);