var displayDigit = document.getElementById("displaydigit");
var userVal = document.getElementById("userval");
var reply = document.getElementById("reply");
var button = document.getElementById("butt");

button.addEventListener('click', function() {
    var randomNum = Math.round(Math.random() * 5);
    displayDigit.innerHTML = randomNum;
    if(userVal.value > 5){
        alert("Input a number from 1 - 5");
        displayDigit.innerHTML = "";
    } else
    if(userVal.value == randomNum) {
        reply.innerHTML = "You guessed Right";
        reply.style.color = "yellow";
    } else {
        reply.innerHTML = "You guessed Wrong";
        reply.style.color = "red";
    }
    
    userVal.value  = "";
})

