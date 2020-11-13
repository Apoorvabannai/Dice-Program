var randomNumber = Math.ceil(Math.random()*6); // 6
var numberImageGenerator = "images/dice"+randomNumber+".png";
var imgOne = document.getElementsByClassName("img")[0].setAttribute("src", numberImageGenerator);

var randomnumberTwo = Math.ceil(Math.random()*6);
var numberImageTwo = "images/dice"+randomnumberTwo+".png";
var imgTwo = document.getElementsByClassName("img")[1].setAttribute("src",numberImageTwo);

if(randomNumber > randomnumberTwo){
  document.querySelector("h1").innerText = "🚩Player One wins"
} else if(randomNumber == randomnumberTwo){
  document.querySelector("h1").innerText = "Draw Match!!"
} else{
  document.querySelector("h1").innerText = "🚩Player Two wins"
}


// flag in front of player imgOne
// flag at end of player 2.
        // <img id="img1" src="images/WinnerFlag.png">
