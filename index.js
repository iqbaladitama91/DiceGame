var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var playerOne = document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 +".png");
var playerTwo = document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 +".png");

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Win";
} else if (randomNumber1 === randomNumber2 ) {
  document.querySelector("h1").textContent = "Draw";
} else {
  document.querySelector("h1").textContent = "Player 2 Win";
}
