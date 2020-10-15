function sortIt(array) {

    array.sort((acc, cur) => {
        let [num1, num2] = [acc, cur];

        console.log(`num1: ${typeof num1}`);
        if (typeof num1 == "object") {
            num1 = acc[0];
        }
        if (typeof num2 == "object") {
            num2 = cur[0];
        }

        return num1 - num2;
    });

    return array;
}

function alternate(array){
    return array.sort((num1,num2) => (num1 = (typeof num1 == "number")? num1 : num1[0]) - (num2 = (typeof num2 == "number")? num2 : num2[0]));
}

let test1 = sortIt([[3], 4, [2], [5], 1, 6]);
let test2 = alternate([[3], 4, [2], [5], 1, 6]);

console.log(test1);
console.log(test2);