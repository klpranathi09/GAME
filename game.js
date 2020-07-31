const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessNum = Math.round(Math.random() * 100);
var lives = 10;
var message;
$submitButton.onclick = () => {
    let userInput = document.getElementById("num-input").value;
    lives--;
    if (userInput == guessNum) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (userInput > guessNum) {
        message = `Oh Sorry! Your guess is too high . \n You have ${lives} lives remaining.`
    } else if (userInput < guessNum) {
        message = `Oh Sorry! Your guess is too low . \n You have ${lives} lives remaining.`

    }
    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
};