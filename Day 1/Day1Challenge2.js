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

// Create a topStudents list which contains student whose scores are above 90.
let topStudents = [student1, student3];

student1.score = 50;
student2.score = 94;

topStudents = [];

for(i =0; i<students.length; i++){
    if  (students[i].score >= 90){
        topStudents.push(students[i]);
    }
}

console.log(topStudents);