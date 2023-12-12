const greet = document.getElementById("greeting");
greet.innerText = "Countdown";

let time = 30
let timer = document.getElementById("timer");

function countdown () {
    time = time - 1;
    if (time > 0) {
        timer.innerText = time;
    } else {
        timer.innerText = "Time is up (refresh to start over)"
    }
        
    console.log(timer.innerText);
}

// setInterval(countdown, 1000);