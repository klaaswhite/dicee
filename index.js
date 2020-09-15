var randomNumber1;
var randomNumber2;

randomNumber1 = Math.floor(Math.random() * 6) + 1;     // returns a random integer from 1 to 6
randomNumber2 = Math.floor(Math.random() * 6) + 1;     // returns a random integer from 1 to 6

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Refresh Me";
} else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🎉 Player one wins";
} else {
    document.querySelector("h1").textContent = "Player two wins 🎉";
}