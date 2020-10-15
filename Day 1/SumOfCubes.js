var test1 = sumOfCubes([1, 5, 9]) // should return 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

var test2 = sumOfCubes([3, 4, 5]) // should return 216

sumOfCubes([2]) // should return 8

sumOfCubes([]) // should return 0


function sumOfCubes(numbers){
    let cube;
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        cube = 1;
        cube = numbers[i]*numbers[i]*numbers[i];

        sum+= cube;
    }

    return sum;
}

console.log(test2);