let test1 = isSubset([3, 2, 5], [5, 3, 7, 9, 2]); // should return true

let test2 = isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]); // should return true

let test3 = isSubset([1, 2], [3, 5, 9, 1]); // should return false

function isSubset(subset, set){

    for(let i =0; i<subset.length; i++){
        if( set.indexOf(subset[i]) === -1){
            return false;
        }
    }

    return true;
}

console.log(test2);
console.log(test3);