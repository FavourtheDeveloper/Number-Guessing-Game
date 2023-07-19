var displayDigit = document.getElementById("displaydigit");
var userVal = document.getElementById("userval");
var reply = document.getElementById("reply");
var button = document.getElementById("butt");
var randomNumber = [1, 2, 3, 4, 5];
button.addEventListener('click', function() {
    var randomNum = Math.round(Math.random() * 4);
    var finalRound = randomNumber[randomNum];
    displayDigit.innerHTML = finalRound;
    if (userVal.value === "") {
        alert("Please Guess a Number");
    } else
    if(userVal.value > 5){
        alert("Input a number from 1 - 5");
        displayDigit.innerHTML = "";
    } else
    if(userVal.value == finalRound) {
        reply.innerHTML = "You guessed Right";
        reply.style.color = "yellow";
    } else {
        reply.innerHTML = "You guessed Wrong";
        reply.style.color = "red";
        document.body.style.backgroundColor = "Yellow";
    }
    
    userVal.value  = "";
})

