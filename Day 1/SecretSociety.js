function societyName(names){

    var secretSocietyName ="";
    for(let i=0; i<names.length; i++){
        secretSocietyName += names[i][0]; 
    }

    return secretSocietyName;
}

let test = societyName(["dam", "Sarah", "Malcolm"]);
console.log(test);