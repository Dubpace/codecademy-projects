//Declare variables for use in Kanye message script
//Set name of user for greeting
const username = 'Will';
//Store quote possibilites as an array
const kanyeQuotes = [
    `If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.`,
    `Love your haters, they’re your biggest fans.`,
    `I don’t care about what people think, because people don’t think.`,
    `For me, giving up is harder than trying.`,
    `I was never really good at anything except for the ability to learn.`,
    `Would you believe in what you believe in if you were the only one who believed it?`,
    `We all self-conscious. I’m just the first to admit it.`,
    `Art is to be free. Design is to fix.`,
    `The most genius thing about the way I create is to create with other geniuses.`,
    `It's not 'can'; it's 'will.' You have to will things into fruition.`,
];
const randomIndex = 0;

const greeting = () => {
    console.log(`Hello, ${username}! Here is your Kanye quote:`);
}
//Greet user to the program
greeting();
console.log(`Testing index 2: ${kanyeQuotes[9]}`);