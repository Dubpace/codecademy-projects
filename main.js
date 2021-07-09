//Declare variables for use in inspirational message script
//Set name of user for greeting
const username = 'Will';
//Determine if celeb is alive or dead
const alive = Math.random() < 0.5;
//Store quote possibilites as an array
const kanyeQuotes = [
    `Love your haters, they’re your biggest fans.`,
    `For me, giving up is harder than trying.`,
    `I was never really good at anything except for the ability to learn.`,
    `Would you believe in what you believe in if you were the only one who believed it?`,
    `Art is to be free. Design is to fix.`,
    `The most genius thing about the way I create is to create with other geniuses.`,
];
const spielbergQuotes = [
    `All of us every single year, we're a different person. I don't think we're the same person all our lives.`,
    `Why pay a dollar for a bookmark? Why not use the dollar for a bookmark?`,
    `I've discovered I've got this preoccupation with ordinary people pursued by large forces.`,
    `The delicate balance of mentoring someone is not creating them in your own image, but giving them the opportunity to create themselves.`,
    `You shouldn't dream your film, you should make it!`,
];
const banksyQuotes = [
    `Art should comfort the disturbed and disturb the comfortable.`,
    `Think outside the box, collapse the box, and take a fucking sharp knife to it.`,
    `There's nothing more dangerous than someone who wants to make the world a better place.`,
    `All artists are willing to suffer for their work. But why are so few prepared to learn to draw?`,
    `People who enjoy waving flags don't deserve to have one`,
];

const greeting = () => {
    console.log(`Hello, ${username}! Here is your Kanye quote:`);
}
//Greet user to the program
greeting();
// console.log(alive);