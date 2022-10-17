// Image 1 change
var randomNum1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");

// Image 2 change
var randomNum2=Math.floor(Math.random()*6)+1;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");


//If Player 1 wins
if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";   
}
// if Player 2 Wins
else if (randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!";
}
