// Exercise 1 - Given code. Please modify it to get desired output
function clone(arr) {
    return [...arr, arr]
}

// Exercise 2
function iSqrt(num) {

    if (num < 0) {
        return "invalid";
    }

    let count = 0;
    let squareoot = num;

    while (squareoot >= 2) {
        squareoot = Math.sqrt(squareoot);
        count++;
    }
    return count;
}



// Exercise 3
function mostExpensiveItem(items) {
    let mostExpensiveValue = -1;
    let mostExpensiveItem;
    for (const [key, value] of Object.entries(items)) {
        
        if(value> mostExpensiveValue){
            mostExpensiveValue = value;
            mostExpensiveItem = key;
        }
    }

    return mostExpensiveItem;
}

// Do not change the line below
module.exports = { clone, iSqrt, mostExpensiveItem };