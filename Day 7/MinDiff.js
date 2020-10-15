//minDifferencePair([1, -31, -27, -18, -48, -15, -11, -34]) ➞ [-34, -31]

function minDifferencePair(numArray){

    let minDifference = Math.abs(numArray[0] - numArray[1]);
    let diffPair = [numArray[0], numArray[1]];

    for (let i = 0; i < numArray.length; i++) {
        for (let j = i+1; j < numArray.length; j++) {
            let currentDifference =Math.abs(numArray[i]-numArray[j]);
            if(minDifference> currentDifference){
                minDifference = currentDifference;
                diffPair = [numArray[i], numArray[j]];
            }
        }
    }
    return diffPair;
}

let test1 = [1, -31, -27, -18, -48, -15, -11, -34];

console.log(minDifferencePair(test1));