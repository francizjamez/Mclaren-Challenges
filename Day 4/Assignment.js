// Exercise 1
function isSymmetrical(number) {

    //lets convert our number to string so because the functions we want to use are for strings only
    let converted = number + "";
    //Lets create a mirror of the string
    //split() splits the string into characters, this will return an array of characters
    //reverse() can reverse the order of an array
    //join can join an array and this will return a string of all the elements combined in the array
    let compare = converted.split("").reverse().join("");

    //if the original string is equal to the mirrored string, then it is symmetrical
    if( converted == compare){
        return true;
    }
    return false;
}

// Exercise 2
function filterArray(array) {
    //filter function that lets you create an argument after =>
    //only the elements that returns true after evaluation is returned in the array
    //thus, all elements not passing the argument(in this case typeof) will not be added to the filtered array
    return filtered = array.filter(element => (typeof element != 'string'));
}

// Exercise 3
function detectWord(str) {
    let hiddenWord = "";

    //In this exercise we have to determine which characters are in the lower string
    //the argument str[i] == str[i].toLowerCase basically checks if the character is already in lower case
    for (let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toLowerCase()){
            hiddenWord += str[i];
        }
    }
    return hiddenWord;
}

// Exercise 4

const grid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

function spotlightSum(grid, n) {
    //formula to find the row of where n is
    let row = Math.floor((n-1)/10);
    //formula to find the column of where n is
    let column = (n - (row * 10)) -1;
    let sum = 0;

    //loop through 3x3 array around the number
    //the if inside just means we dont want to add n to the sum
    for (let i = row -1; i <= row + 1; i++) {
        for (let j = column -1; j <= column +1; j++) {
            if([row,column] != [i,j]){
                sum += grid[i][j];
            }
        }
    }
    return sum;
}

// Do not change the line below
module.exports = { isSymmetrical, filterArray, detectWord, spotlightSum };