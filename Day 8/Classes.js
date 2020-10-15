// 1. Create a student class which takes name and list of scores as a parameter. 
// 2. Implement a method called averageScore which returns average score of the student
// 3. Implement a method called printInfo which returns 'Name has average score of xx' string

class student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }
    getAverageScore() {
        return this.scores.reduce((acc, cur) => acc+cur) / this.scores.length;
    }
    printInfo() {
        console.log(`${this.name} has average score of ${this.getAverageScore()}`);
    }
}

let francis = new student("Francis", [2, 2, 2, 2]);
francis.printInfo();