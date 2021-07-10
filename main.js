//Declare variables for use in inspirational message script
//Randomly determine if celeb is alive or dead
const alive = Math.random() < 0.5;
//Store celeb quotes in individual arrays
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
const vanGoghQuotes = [
    `Great things are done by a series of small things brought together.`,
    `I feel that there is nothing more truly artistic than to love people.`,
    `The way to know life is to love many things.`,
    `For my part I know nothing with any certainty, but the sight of the stars makes me dream.`,
    `Conscience is a man's compass.`,
];
const hitchcockQuotes = [
    `There is no terror in the bang, only in the anticipation of it.`,
    `The length of a film should be directly related to the endurance of the human bladder.`,
    `Always make the audience suffer as much as possible.`,
    `What is drama but life with the dull bits cut out`,
    `Puns are the highest form of literature.`,
];
const elvisQuotes = [
    `Never wait for tomorrow, what if tomorrow never comes?`,
    `When things go wrong, don’t go with them.`,
    `There’s no job too immense, when you got confidence.`,
    `The road to love is full of danger signs.`,
    `I forgot to remember to forget.`,
];

//Celeb factory function
const createCeleb = (fullName, alive, quoteArray) => {
    return {
        name: fullName,
        alive,
        quotes: quoteArray,
        randomQuote() {
            let randomIndex = Math.floor(Math.random() * this.quotes.length);
            return `"${this.quotes[randomIndex]}"`;
        },
    }
}

// Initialize celeb objects
const kanye = createCeleb('Kanye West', true, kanyeQuotes);
const spielberg = createCeleb('Steven Spielberg', true, spielbergQuotes);
const banksy = createCeleb('Banksy', true, banksyQuotes);
const vanGogh = createCeleb('Vincent Van Gogh', false, vanGoghQuotes);
const hitchcock = createCeleb('Alfred Hitchcock', false, hitchcockQuotes);
const elvis = createCeleb('Elvis Presley', false, elvisQuotes);

// Initialize two arrays of celebs that are dead or alive
const living = [kanye, spielberg, banksy];
const deceased = [vanGogh, hitchcock, elvis];

//Primary message function to randomly select a celeb and display a random quote
const message = () => {
    if (alive) {
        let randomIndex = Math.floor(Math.random() * living.length);
        console.log(`Your celebrity quote is from ${living[randomIndex].name}, who is still alive today.`);
        console.log(living[randomIndex].randomQuote());
    } else {
        let randomIndex = Math.floor(Math.random() * deceased.length);
        console.log(`Your celebrity quote is from ${deceased[randomIndex].name}, who is unfortunately no longer with us.`);
        console.log(deceased[randomIndex].randomQuote());
    }
};

//Testing here
message();