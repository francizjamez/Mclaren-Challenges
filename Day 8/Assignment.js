// Exercise 1 - Given code. Please modify it to get desired output
function zipIt(arr1, arr2) {
    
    if(arr1.length != arr2.length){
        return "sizes don't match";
    }
    let pairedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        pairedArray = [arr1[i], arr2[i]];
        pairedArray.push(pair);
    }
    return pairedArray;
}

// Exercise 2

class multiArray{

    constructor(array){
        this.array = array;
    }
    getArray(){
        if(this.array == undefined){
            return undefined;
        }
        return this.array[0];
    }
}
function measureDepth(str) {

    let newArray = new multiArray(str);

    let current = newArray;
    let count =1;
    while(current.getArray() != undefined){
        current = new multiArray(current.getArray());
        count ++;
    }
    return count;
}

// Exercise 3
function sliceSum(arr, n) {
    let sum =0;
    for (let i = 0; i < n; i++) {   
        sum += arr[i];
    }

    return sum;
}

// Exercise 4
class IceCream {

    constructor(flavor, numSprinkles){
        this.flavor = flavor;
        this.numSprinkles = numSprinkles;
    }
}

ice1 = new IceCream("Chocolate", 13)
ice2 = new IceCream("Vanilla", 0)
ice3 = new IceCream("Strawberry", 7)
ice4 = new IceCream("Plain", 18)
ice5 = new IceCream("ChocolateChip", 3)
ice6 = new IceCream("Chocolate", 23)
ice7 = new IceCream("Strawberry", 0)
ice8 = new IceCream("Plain", 34)
ice9 = new IceCream("Plain", 81)
ice10 = new IceCream("Vanilla", 12)


function sweetestIcecream(iceCreams) {
    let sweetnessFlavor = {
        Plain: 0,
        Vanilla: 5,
        ChocolateChip: 5,
        Strawberry: 10,
        Chocolate: 10
    }

    const sweetnessCalculator =({flavor, numSprinkles}) =>{
        let sweetness = sweetnessFlavor[flavor] + numSprinkles;
        return sweetness;
    }

    let sweetest = iceCreams[0];
    for (const currentIceCream of iceCreams) {
        if(sweetnessCalculator(sweetest) < sweetnessCalculator(currentIceCream)){
            sweetest = currentIceCream;
        }
    }

    return sweetnessCalculator(sweetest);
}

console.log(sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]));


// Do not change the line below
module.exports = {zipIt, measureDepth, sliceSum, IceCream, sweetestIcecream};