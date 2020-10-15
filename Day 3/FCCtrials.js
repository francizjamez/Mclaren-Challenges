function rangeOfNumbers(startNum, endNum) {

    if(startNum === endNum){
        return [endNum];
    }
    else{
        const range = rangeOfNumbers(startNum, endNum-1);
        range.unshift(endNum);
        return range;
    }
}


console.log(rangeOfNumbers(1,5));