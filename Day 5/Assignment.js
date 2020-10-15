// Exercise 1
function largestSwap(num) {
    
    let convert = num + '';
    let reverse = convert.split("").reverse().join("");

    return parseInt(convert) >= parseInt(reverse);
}

// Exercise 2
function mean(num) {
    
    convert = num + "";
    let numbers = convert.split("");
    let sum =0;
    for(let digit of numbers){
        sum += parseInt(digit);
    }

    return sum/numbers.length;
}

// Exercise 3
function canAlternate(str) {

    let ones = 0, zeros = 0;

    for (let i = 0; i < str.length; i++) {
        
        if(str[i] == "0"){
            zeros++;
        }
        else{
            ones++;
        }
    }

    let difference = ones - zeros;

    console.log(difference);
    return difference >= -1 && difference <=1;

}

console.log(canAlternate('0001111'));

// Exercise 4
function leftDigit(str) {

    
    let digits = "0123456789";

    const isDigit = (num) => {
        for (let i = 0; i < digits.length; i++) {
            if (num == digits[i]){
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        if(isDigit(str[i])){
            return parseInt(str[i]);
        }
    }

    return "no digits";
}

// Do not change the line below
module.exports = { largestSwap, mean, canAlternate, leftDigit };