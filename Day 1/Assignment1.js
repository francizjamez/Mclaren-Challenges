let student1 = {
name: 'Anil',
score: 99
}

let student2 = {
name: 'Michael',
score: 84
}

let student3 = {
name: 'Kimiko',
score: 95
}

let student4 = {
name: 'Raj',
score: 67
}

let students = [student1, student2, student3, student4];

function studentsAboveCutoff(students, cutOff){
    let filteredList = [];
    // Implement this function so that it returns an array containing students whose scores are 
    // above `cutOff`

    for(let i =0; i<students.length; i++){
        if(students[i].score >= cutOff){
            filteredList.push(students[i]);
        }
    }

    return filteredList;
}

console.log(studentsAboveCutoff(students, 96));