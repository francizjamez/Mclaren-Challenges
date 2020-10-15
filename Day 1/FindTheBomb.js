function bomb(sentence){
    for(let i=0; i<sentence.length; i++){
        if(sentence.substring(i,i+4).toUpperCase() =="BOMB"){
            return "Duck!!!";
        }
    }
    return "There is no bomb, relax.";
}