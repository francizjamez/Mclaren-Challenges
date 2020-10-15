function dashed(sentence){

    let characters = sentence.split("");
    let vowels = "AaEeIiOoUu";
    let dashedSentence = "";
    
    const isVowel = (character) =>{
        if(vowels.indexOf(character) != -1){
            return true;
        }
        return false;
    }

    for(let letter of characters){
        if(isVowel(letter)){
            dashedSentence += `-${letter}-`;
        }
        else{
            dashedSentence += letter;
        }
    }
    
    return dashedSentence;
}

console.log(dashed("Edabit"));

let linkedList = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
}
function isValuePresent(list, target){

    while(list != undefined){
        if(list.value === target){
            return true;
        }
        list = list.next;
    }

    return false;
}