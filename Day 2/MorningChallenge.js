// Challenge 1
function doubleChar(word) {
    let doubledWord ="";
    for(let i =0; i<word.length; i++){
        doubledWord += word[i] + word[i];
    }

    return doubledWord;
}

// Challenge 2
function repeatChar(word, n) {
    let repeatedWord = "";

    for(let i=0; i<word.length; i++){
        for(let j=0; j<n; j++){
            repeatedWord += word[i];
        }
    }
    return repeatedWord;
}


// Don't change code below this line
module.exports = {doubleChar, repeatChar};