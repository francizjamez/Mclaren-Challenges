let linkedList = {
    value: 5,
    next: {
        value: 7,
        next: {
            value: 11,
            next: {
                value: 18,
                next: undefined
            }
        }
    }
}

// Ex 1
// Write a function which takes in a linked list and prints all the values of the linked list
function printValues(linkedList){

    let current = linkedList;

    while(current != undefined){
        console.log(current.value);
        current = current.next;
    }

}


// Ex 2
// Write a function which takes in a linked list and a value and adds that value to the end of the linked list

function addValue(linkedList, val){
    while(linkedList.next != undefined){
        linkedList = linkedList.next;
    }
    linkedList.next = {value: val};
}

function addHead(linkedList,val){
    let newList = {value: val, next: linkedList};
    return newList;
}

addValue(linkedList, 1);

printValues(linkedList);
// addValue(linkedList, 99);

// printValues(linkedList);

// console.log(`linked`,linkedList.value);