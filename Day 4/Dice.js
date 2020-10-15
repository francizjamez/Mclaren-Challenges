function countScore(dices){

    let score = 0;

    for(i =0; i<dices.length; i++){
        
        if(dices[i][0] == dices[i][1]){
            score = 0;
        }
        else{
            score += dices[i][0] + dices[i][1];
        }
    }
    return score;
}

function countVowels(word){

    const vowels ="AEIOU";
    let count =0;
    const upWord = word.toUpperCase();

    for(i =0; i<upWord.length; i++){   
        for(j =0; j<vowels.length; j++){
            if(upWord[i] == vowels[j]){
                count++;
            }
        }
    }
    return count;
}