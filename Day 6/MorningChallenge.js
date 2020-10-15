// Challenge 1
function factorChain(numbers){

    for (let i = 0; i < numbers.length-1; i++) {
        if (numbers[i+1] % numbers[i] != 0){
            return false;
        }
    }

    return true;

}

//console.log(factorChain([10,1]));

// Challenge 1
function expensiveOrders(orders, cost){

    let expensiveItems ={}
    for(let item in orders){
        if (orders[item] > cost){
            expensiveItems[item] = orders[item];
        }
    }
    return expensiveItems;
}

//console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000));


module.exports = {factorChain, expensiveOrders};