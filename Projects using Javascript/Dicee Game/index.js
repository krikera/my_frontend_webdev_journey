var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var forImg1 = document.querySelector(".img1");

if (randomNumber1 === 1) {
    forImg1.setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 === 2) {
    forImg1.setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 3) {
    forImg1.setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4) {
    forImg1.setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 === 5) {
    forImg1.setAttribute("src", "images/dice5.png");
}
else if (randomNumber1 === 6) {
    forImg1.setAttribute("src", "images/dice6.png");
}

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;


var forImg2 = document.querySelector(".img2");

if (randomNumber2 === 1) {
    forImg2.setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 === 2) {
    forImg2.setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 3) {
    forImg2.setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4) {
    forImg2.setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 === 5) {
    forImg2.setAttribute("src", "images/dice5.png");
}
else if (randomNumber2 === 6) {
    forImg2.setAttribute("src", "images/dice6.png");
}

var heading = document.querySelector(".heading");
if (randomNumber1>randomNumber2) {
    heading.innerHTML = "Player 1 Wins !";
}
else if (randomNumber1<randomNumber2){
    heading.innerHTML = "Player 2 Wins !";
    
}
else if(randomNumber1 === randomNumber2){
    heading.innerHTML = "It is a draw";
}
// there is also a better way to do this. you can get the approach from the solutions of this video provided by angela yu
// as this was my first approch to solve this that's why I didn't removed this.