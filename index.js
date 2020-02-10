var dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var imagePath = "D:\\Web Developement\\Dice Game\\Dicee Challenge - Starting Files\\Dicee Challenge - Starting Files\\images";

function getRandomNumber(){
    var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * dice.length;
    randomNumber1 = Math.floor(randomNumber1);
    return randomNumber1;
}

function diceRoll(randomNumber1){
    var imageName = dice[randomNumber1];
    return imageName;
}


var roll1 = document.querySelector(".img1");
var randomNumber1 = getRandomNumber();
roll1.setAttribute("src", imagePath + "\\" + diceRoll(randomNumber1));

var roll2 = document.querySelector(".img2");
var randomNumber2 = getRandomNumber();
roll2.setAttribute("src", imagePath + "\\" + diceRoll(randomNumber2));

if (randomNumber1 > randomNumber2){
var playerWin = document.querySelector("h1").innerHTML = "Player 1 Wins!";

} else if (randomNumber1 < randomNumber2){
playerWin = document.querySelector("h1").innerHTML = "Player 2 Wins!";

} else if (randomNumber1 === randomNumber2){
    playerWin = document.querySelector("h1").innerHTML = "Draw!";
}