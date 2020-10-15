let statement = `Hurricane Gonzalo was the second tropical cyclone, after Hurricane Fay, to directly strike the island of Bermuda in a one-week time frame in October 2014, and was the first Category 4 Atlantic hurricane since Hurricane Ophelia in 2011. At the time, it was the strongest hurricane in the Atlantic since Igor in 2010.[1] Gonzalo struck Bermuda less than a week after the surprisingly fierce Hurricane Fay; 2014 was the first season in recorded history to feature two hurricane landfalls in Bermuda. A powerful Atlantic tropical cyclone that wrought destruction in the Leeward Islands and Bermuda, Gonzalo was the seventh named storm, sixth and final hurricane and only the second major hurricane of the below-average 2014 Atlantic hurricane season.`;
// Write a function which takes a statement and returns an object containing `word` as key and their `frequency` as value

function wordCount(sentence){

    let dictionary = {};
    
    let words = sentence.split(' ');

    for (let index = 0; index < words.length; index++) {
        words[index] = words[index].toUpperCase();
    }


    for(let word of words){
        if(!dictionary.hasOwnProperty(word)){
            let count =0;
            for(let check of words){
                if (word ===check){
                    count++;
                }
            }
            dictionary[word] = count;
        }
    }

    return dictionary
}

console.log(wordCount(statement));