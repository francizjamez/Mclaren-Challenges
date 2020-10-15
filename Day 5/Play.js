function play(){

    let randomNumber = Math.floor((Math.random() * 50) + 1);

    let tries = 5;
    let guess;
    while(tries >0){
        guess = prompt("Enter your guess: ");

        if(guess>randomNumber){
            alert("Im thinking of a smaller number");
        }
        else if(guess< randomNumber){
            alert("Im thinking of a bigger number");
        }
        else if(guess == randomNumber){
            alert("You win!");
            break;
        }
        tries--;
    }
    if(tries = 0){
        alert("You lost");
    }
    alert("Thanks for playing");
}