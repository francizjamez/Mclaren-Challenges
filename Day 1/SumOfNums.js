
function sumOfNums(numbers){
    let sum = 0;
    for(let i =0; i<numbers.length; i++ ){
        sum += numbers[i];
    }
    console.log(sum);
}

sumOfNums([]);
sumOfNums([1,5,9]);