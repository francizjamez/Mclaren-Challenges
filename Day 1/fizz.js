    // Implement the function fizz which prints all the numbers from 1 to 100 but for every third number it prints `fizz` instead.
    // For eg. it should print: 1, 2, fizz, 4, 5, fizz, 7, 8 fizz, ...

    function fizz(){

        let change;

        for(let i =1; i<=100; i++){

            change = "";
            if(i%3 == 0){
                change += "Fizz";
            }
            if(i%5 == 0){
                change += "Buzz";
            }
            if(change ==""){
                change = i;
            }
            console.log(change);
        }
    }

    fizz();