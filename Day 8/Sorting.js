let student1 = {
    name: 'Aditya',
    score: 55
}

let student2 = {
    name: 'Nikhil',
    score: 75
}

let student3 = {
    name: 'Danny',
    score: 83
}


let student4 = {
    name: 'Sameer',
    score: 54
}


let student5 = {
    name: 'Kimiko',
    score: 64
}

let student6 = {
    name: 'Joshua',
    score: 99
}

let students = [student1, student2, student3, student4, student5, student6]

  // Sort the students by their scores ascending, so first in the list should be student with lowest score.

let sortedStudents = students.sort(({score: score1}, {score: score2}) => score1-score2);

console.log(sortedStudents);