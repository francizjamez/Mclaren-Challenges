let test1 = highLow("1 2 3 4 5"); // should return "5 1"

let test2 =highLow("1 2 -3 4 5"); // should return "5 -3"

highLow("1 9 3 4 -5"); // should return "9 -5"

let test3 = highLow("13"); // should return "13 13"

function highLow(numbers){
    let numbersArray = numbers.split(' ');

    if (numbers == ""){
        return;
    }

    let high = numbersArray[0];
    let low = numbersArray[0];

    for(let i=1; i<numbersArray.length; i++){
        if (numbersArray[i] > high){
            high = numbersArray[i];
        }
        if (numbersArray[i] < low){
            low = numbersArray[i];
        }
    }
   
    return high + " "+ low;
}

console.log(test1);
console.log(test2);
console.log(test3);