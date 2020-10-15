let farm = [['W', 'C', 'C'], ['C', 'C', 'C'], ['W', 'W', 'C'], ['C', 'C', 'W']]

function totalSpots(farm){

    let count =0;
    for(let i =0; i<farm.length; i++){
        for(let j=0; j<farm[i].length; j++){
            count+= 1;
        }
    }
    return count;
}
farm = [['W', 'C', 'C'], ['C', 'C', 'C'], ['W', 'W', 'C'], ['C', 'C', 'W']];

function printLayout(farm){
    for(let i =0; i<farm.length; i++){
        console.log(farm[i].join(" | "));
    }
}

printLayout(farm);
// should print 
// W | C | C
// C | C | C
// W | W | C
// C | C | W

farm = [['W', 'C', 'W'], ['C', 'W', 'C'], ['C', 'C', 'C'], ['C', 'C', 'W'], ['C', 'C', 'C']]
// has 4 water outlets

console.log(`has ${waterOutlets(farm)} water outlets`);

function waterOutlets(farm){
    let count =0;
    for(let i =0; i<farm.length; i++){
        for(let j=0; j<farm[i].length; j++){
            if(farm[i][j] ==="W"){
                count++;
            }
        }
    }
    return count;
}

farm = [['W', 'C', 'W'], ['C', 'W', 'C'], ['C', 'C', 'C'], ['C', 'C', 'W'], ['C', 'C', 'C']];
// has 2 rows without any water outlet
console.log((`farm1 = ${isHydrated(farm)} hydrated`)); // should print false

let farm2 = [['W', 'C'], ['C', 'W'], ['C', 'W'], ['W', 'W']];
console.log(`farm2 = ${isHydrated(farm2)} hydrated`); // should print true

function isHydrated(farm){
    for(let i =0; i<farm.length; i++){
        hydrated = false;
        for(let j =0; j<farm[i].length; j++){
            if(farm[i][j] === "W"){
                hydrated = true;
            }
        }
        if(!hydrated){
            return false;
        }
    }
    return true;
}