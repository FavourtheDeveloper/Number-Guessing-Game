var displayDigit = document.getElementById("displaydigit");
var userVal = document.getElementById("userval");
var reply = document.getElementById("reply");
var button = document.getElementById("butt");
var randomNumber = [0, 1, 2, 3, 4, 5];

button.addEventListener('click', function() {
    var randomNum = Math.round(Math.random() * 5);
    var finalRound = randomNumber[randomNum];
    displayDigit.innerHTML = finalRound;

    if (userVal.value === "") {
        alert("Please Guess a Number from 0 - 5");
    } else
    if(userVal.value > 5){
        alert("Input a number from 0 - 5");
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

