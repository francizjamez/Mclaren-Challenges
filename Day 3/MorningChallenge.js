function countOnes(matrix) {
    let count =0;
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){

            if (matrix[i][j] === 1){
                count++;
            }
        }
    }
    return count;
}

// console.log(
//     countOnes([
//         [1, 1, 1],
//         [0, 0, 1],
//         [1, 1, 1]
//         ]
//   )
// );

// Challenge 2
function spelling(word) {
    let subWords = [];
    for(let i=1; i<=word.length; i++){
        subWords.push(word.substring(0,i))
    }
    return subWords;
}

//console.log(spelling("happy"));


// Do not change the line below
module.exports = {countOnes, spelling,};