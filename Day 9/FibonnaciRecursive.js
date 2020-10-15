function fibbonaci(num){
    
    if (num <=2){
        return 1;
    }
    else{
        return fibbonaci(num-1) + fibbonaci(num -2);
    }
}

function fibbonacciArray(num){
    if (num <=2){
        return [1,1];
    }

    let tempResult = fibbonaci(num-1);
    let nextTerm = tempResult[tempResult.length-1] + tempResult[tempResult.length-2];

    tempResult.push(nextTerm);

    return tempResult;
}

console.log(fibbonacciArray(7));