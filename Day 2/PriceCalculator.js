// Implement a `priceCalculator` function which takes in a boolean `isChild` and a string `dayOfWeek`. 
// If it is a Sunday then price of ticket would be 80 else price would be 50
// if it is a child then the price would be half of the 

function priceCalculator(isChild, dayOfWeek){
    let price;
    if(dayOfWeek ==="Sunday"){
        price = 80;
    }
    else{
        price = 50;
    }

    if(isChild){
        price /=2;
    }

    return price;
}
    
let person = {
  name: 'Sujan',
  age: 22
};

let test = priceCalculator((person.age <18), "Sunday");
console.log(test);
// Q.2 calculate ticket price this person will have to pay on Sunday.