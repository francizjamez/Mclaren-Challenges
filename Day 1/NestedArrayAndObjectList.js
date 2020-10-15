function reportCard(students){

	for(i =0; i<students.length; i++){
        console.log(students[i][0] +" has scored " +students[i][1]);
    }
}

let students = [['Adi', 58], ['Sunny', 77], ['Michael', 61]];
console.log("Array: ");
reportCard(students);
console.log();

// Expected Output
// 
// Adi has scored 58
// Sunny has scored 77
// Michael has scored 61

function reportCardFromObjects(students){
	for(i =0; i<students.length; i++){
        console.log(students[i].name +" has scored " +students[i].score);
    }
}

let students2 = [{name: 'Adi', score: 58}, {name: 'Sunny', score: 77}, {name: 'Michael', score: 61}];
console.log("Objects: ");
reportCardFromObjects(students2);
// Expected Output
// 
// Adi has scored 58
// Sunny has scored 77
// Michael has scored 61