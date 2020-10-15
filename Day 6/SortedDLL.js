function createList(values) {
    let newList = { 'value': values[0], next: undefined };
    let head = newList;
    for (let i = 1; i < values.length; i++) {

        head.next = { 'value': values[i] };
        head = head.next
    }
    return newList;
}

function createPrev(list) {
    let prev = list;
    let current = list.next;
    while (current != undefined) {
        current.prev = prev;
        prev = current;
        current = current.next;
    }
}

function printList(list) {

    let current = list;
    while (current != undefined) {
        let row = `value: ${current.value} `;
        if (current.hasOwnProperty('prev')) {
            row += `,prev: ${current.prev.value} `
        }
        if (current.hasOwnProperty('next')) {
            row += `,next: ${current.next.value} `
        }
        console.log(row);
        current = current.next;
    }
}

let list = createList([1, 3, 5, 7, 9]);
createPrev(list);

// Implement a function add which takes in the doublyLinkedList and value and adds the value such that DLL is always sorted
function addToDLL(linkedList, targetVal) {

    let current = linkedList
    let targetNode;
    //step 1 locate the target node to insert to
    while (current != undefined) {
        if (current.hasOwnProperty('next')) {
            if (current.hasOwnProperty('prev')) {

                //edge cases for inserting on !head and !tail
                if (current.prev.value <= targetVal && current.next.value >= targetVal) {
                    targetNode = current;
                    break;
                }
            }
            else {
                //edge case for inserting on head
                if (current.value >= targetVal) {
                    targetNode = current;
                    break;
                }
            }
        }
        else {
            //edge case for tail
            if (current.value <= targetVal) {
                console.log("insert at tail");
                targetNode = current;
                break;
            }
        }
        current = current.next;
    }
    //step 2: find the tail
    let tail = current;
    while (tail.next != undefined) {
        tail = tail.next;
    }
    //step 3: add another object to the tail
    //this is necessary since we dont wanna erase values on the list, we just wanna shift everything to the right until we finally find the node we want to replace
    tail.next = { 'value': tail.value }

    //side step: make your newly created list be doubly linked by adding previous properties
    createPrev(list);

    //side step: since we just added an object, we want to start from the latest added object so we can backtrack from the last element
    tail = tail.next;

    //step 4: backtrack insert when found
    //the logic is simple, as long as we don't find the target node we are looking for, we keep shifting the values we encounter
    //to the right and when we do find it, we want to equal the value of this node to the value we want to insert
    //this does not delete the previous node stored in here since we have already shifted it to the right in the previous iteration

    while (tail != undefined) {
        if (tail.hasOwnProperty('prev')) {
            if (tail.hasOwnProperty('next')) {
                //edge case for inserting on !head and !tail
                if (tail.prev.value <= targetVal && tail.value >= targetVal) {
                    tail.value = targetVal;
                    break;
                }
            }
            else {
                //edge case on tail
                if (tail.value <= targetVal) {
                    tail.value = targetVal;
                    break;
                }
            }
        }
        else {
            //inserting on head
            if (tail.value >= targetVal) {
                tail.value = targetVal;
                break;
            }
        }
        tail.value = tail.prev.value;
        tail = tail.prev;
    }
}



printList(list);
addToDLL(list, 6);
console.log('------AFTER ADD-------');
printList(list);