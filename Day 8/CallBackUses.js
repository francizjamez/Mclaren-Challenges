let student1 = {
    name: 'Aditya',
    score: 55,
    grade: 7
}

let student2 = {
    name: 'Nikhil',
    score: 75,
    grade: 8
}

let student3 = {
    name: 'Danny',
    score: 84,
    grade: 7
}



let student4 = {
    name: 'Kimiko',
    score: 64,
    grade: 8
}

let students = [student1, student2, student3, student4];

// Use forEach to print student info like:
// 'Kimiko scored 64'

// let studentScore = (student) =>{
//     const {name, score} = student;
//     console.log(`${name} scored ${score}`);
// }

students.forEach((student) =>{
    const {name, score} = student;
    console.log(`${name} scored ${score}`);
});
console.log("---------------------");


let numbersList = [11, 55, 32, 66, 82, 90, 1, 5, 93]
  // Use in-built `filter` function to generate a new array consisting of only odd numbers.

let oddFilter = (numbers) => {
    let array = [];
    numbers.forEach((num) => {
        if(isOdd(num)){
            array.push(num);
        }
    });
    return array;
}

let isOdd = (number) =>{
    return number%2 === 1;
}

let oddList = oddFilter(numbersList);
console.log(oddList);

let sortList = numbersList.sort((a,b)=> a-b);

console.log(`sorted list: ${sortList}`);