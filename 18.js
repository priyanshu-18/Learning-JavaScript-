let winningNumber = 20;
let userGuess = +prompt("Guess the Number");
if(userGuess === winningNumber){
    console.log("u winned the match");
}if(userGuess > winningNumber){
    console.log("your guess is too high")
}else{
    console.log("your guess is too low")
}