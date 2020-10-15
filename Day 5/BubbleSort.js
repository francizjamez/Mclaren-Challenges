function bubbleSort(array){

    let sorted;

    while(!sorted){
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            if(array[i]> array[i+1]){
                let temp = array[i];
                array[i] = array[i +1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
    }
}

let arr = [4,5,6,1,2,3];

bubbleSort(arr);

console.log(arr);