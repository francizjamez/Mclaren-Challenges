
// Create a doubly linked list with values 5, 11, 8, 32, 23
let list;
function createList(values){
    let newList = {'value': values[0], next: undefined};
    let head = newList;
    for (let i = 1; i < values.length; i++) {

        head.next = {'value' :values[i] };
        head = head.next
    }
    return newList;
}
list = createList([5,11,8,32,23]);
createPrev(list);
//console.log(list);

function createPrev(list){
    let prev = list;
    let current = list.next;
    while(current != undefined){
        current.prev = prev;
        prev = current;
        current = current.next;
    }
}

// Write a function which takes in a doublyLinkedList and an integer and adds the value at the begininng of the list
function addHead(list, value){

    let head = {'value': value, next: list};
    list.prev = head;

    return head;
}

list = addHead(list, 99);
//console.log(list);

// Write a function called `swapValues` which takes in a doubly linked list, val1 and val2 (assume they will be present int the list for sure) and it swaps the two values

function swapValues(list, val1, val2){
    let obj1 = list;
    let obj2 = list;
    let current = list;
    while(current != undefined){
        if (current.value == val1){
            obj1 = current;
        }
        else if (current.value == val2){
            obj2 = current;
        }
        current  = current.next;
    }

    let [n1p, n2n] = [obj1.prev, obj2.next];
    let temp = obj1.value;
    obj1.value = obj2.value;
    obj2.value = temp;
    obj1.prev = n1p;
    obj2.next = n2n;
}

function printList(list){

    let current = list;
    while(current != undefined){
        let row =`value: ${current.value} `;
        if(current.hasOwnProperty('prev')){
            row += `,prev: ${current.prev.value} `
        }
        if(current.hasOwnProperty('next')){
            row += `,next: ${current.next.value} `
        }
        console.log(row);
        current = current.next;
    }
}

printList(list)
console.log("----------------------------");
swapValues(list, 5,11);
printList(list);