let words = ['respect', 'motion', 'coat', 'confused', 'atten', 'graceful', 'unusual', 'subsequent','guide', 'cost', 'medical'];

function randomWord(){
    return words[Math.floor(Math.random()*(words.length))];
}

console.log(randomWord());