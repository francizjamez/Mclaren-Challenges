function binarySearch(arr, val){

    let end = arr.length - 1;
    let start = 0;
    let center = Math.ceil((end + start)/2);

    while(end != start){
        if(arr[center] == val){
            return `Found value at index ${center}`;
        }
        else if(val > arr[center]){
            start = center;
            center = Math.ceil((end + start)/2);
        }
        else{
            end = center;
            center = Math.floor((end + start)/2);
        }
    }
    return 'not found';
}

let array = [6,7,8,9,10];
console.log(binarySearch(array, 9));