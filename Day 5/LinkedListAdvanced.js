let list = {
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

// Implement the function remove so it removes a `target` value from linkedList and returns true or false depending on whether element was removed or not
function remove(linkedList, target) {
    let current = linkedList;

    if (linkedList.value == target) {
        current = linkedList.next;
        linkedList = current;
        return true;
    }
    while (linkedList.next != undefined) {
        if(linkedList.next.value == target){
            linkedList.next = linkedList.next.next;
            return true;
        }
        linkedList = linkedList.next;
    }
    return false;
}


// Implement the function swap so it swap the head and tail nodes of the provided linkedList
function swap(linkedList) {

    let values = []
    let current = linkedList;
    while(current != undefined){
        
        values.push(current.value);
        current = current.next;
    }
    
    linkedList.value = values[values.length-1];

    while(linkedList != undefined){

        if(linkedList.next == undefined){
            linkedList.value = values[0];
        }
        linkedList = linkedList.next;
    }
}


// Implement the function insertAt so it inserts the `value` at the given `index` of the `linkedList`

function insertAt(linkedList, index, value) {

    
    let prev = linkedList
    let i =0;

    while(i<= index){
        current = linkedList.next;
        index++;
    }

    let node = {"value": value, next: undefined};
    current
}
