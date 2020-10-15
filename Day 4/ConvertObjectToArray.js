function objectToArray(obj){
    let array = [];
    for(let key in obj){
        array.push([key, obj[key]]);
    }
    return array
}

let test1 = objectToArray({
    D: 1,
    B: 2,
    C: 3
  }); // should return [["D", 1], ["B", 2], ["C", 3]]
  
let test2 =objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }); // should return [["likes", 2], ["dislikes", 3], ["followers", 10]]

  
  console.log(test1);
  console.log(test2);