// Example
// Write a function which takes in a string `name` and returns 'Hello, name'
function greeting(name){
  return("Hello " + name);
}

// Challenge 1
// Write a function which takes a list of numbers and prints them in reverse order
// Do not use the inbuilt `reverse` function.
function reverseList(numbers) {
    let newList = [];
    for(i=numbers.length -1; i>=0; i--){
        newList.push(numbers[i]);
    }
    return newList;
}

// Challenge 2
// Write a function which takes a string and returns a string in the reverse order that it was given
function reverseString(word) {
    
    let newWord =""

    for(i = (word.length-1); i >=0; i--){
        newWord += word.charAt(i);
    }

    return(newWord);
}

// Don't change code below this line
module.exports = {reverseList, reverseString};



console.log(reverseString("Hello"));