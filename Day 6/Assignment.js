// Exercise 1
function evenlyDivisible(a, b, c){

    let sumOfDivisibles = 0;
    for (let i = a; i <= b; i++) {

        if(i % c === 0){
            sumOfDivisibles += i;
        }
    }
    return sumOfDivisibles;
}


// Exercise 2
function removeDups(arr){
    let fileteredArray = []
    for(let element of arr){
        if(fileteredArray.indexOf(element) === -1){
            fileteredArray.push(element);
        }
    }
    return fileteredArray;
}


// Exercise 3
function isAnagram(str1, str2){

    const createDictionary = function(string){
        let dictionary = {}
        let convertedStr = string.toUpperCase();
        for (let character of convertedStr) {
            if(dictionary.hasOwnProperty(character)){
                dictionary[character] += 1
            }
            else{
                dictionary[character] = 1;
            }
        }
        return dictionary;
    }

    const isEqual = function(dict1, dict2){
        let dict1Len = Object.keys(dict1).length;
        let dict2Len = Object.keys(dict2).length;

        let longerString = (dict1Len>dict2Len? dict1:  dict2);
        let shorterString =(longerString==dict1? dict2:  dict1);
        for (let character in longerString) {
            console.log(character);
            console.log(shorterString.hasOwnProperty(character));
            if(shorterString.hasOwnProperty(character)) {
                if(longerString[character] != shorterString[character]){
                    return false;
                }
            }
            else{
                return false;
            }
        }
        return true;
    }

    let dictionary1= createDictionary(str1);
    let dictionary2 = createDictionary(str2);
    return isEqual(dictionary1, dictionary2);
}

// Exercise 4
function highestDigit(num){
    
    let converted = num + "";
    let digits = converted.split("");
    let maxDigit = digits[0];
    for (const digit of digits) {
        if(digit > maxDigit){
            maxDigit = digit;
        }
    }
    
    return parseInt(maxDigit);
}

// Do not change the line below
module.exports = {evenlyDivisible, removeDups, isAnagram, highestDigit};
