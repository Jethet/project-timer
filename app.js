function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

function startTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  hour = formatTime(hour);
  minute = formatTime(minute);
  second = formatTime(second);

  document.querySelector("#current-time").innerHTML = hour + ":" + minute + ":" + second;
  setTimeout(function () {
    startTime();
  }, 500);
}

let startButton = document.querySelector("#start-button");
let input = document.querySelector("#number");

startButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    alert("Please enter the number of minutes");
  } else {
    runTime();
  }
});

function runTime() {
  let runSeconds = 0;
  let countDown = setInterval(() => {
    if (runSeconds < input.value * 60) {
      ++runSeconds;
      let totalHours = 0;
      let totalMinutes = 0;
      let totalSeconds = 0;
      
      totalHours = Math.floor(runSeconds / 3600);
      // runSeconds %= 3600;
      totalMinutes = Math.floor(runSeconds / 60);
      totalSeconds = runSeconds % 60;
      totalHours = formatTime(totalHours);
      totalMinutes = formatTime(totalMinutes);
      totalSeconds = formatTime(totalSeconds);
      document.querySelector("#hours-passed").innerHTML = totalHours;
      document.querySelector("#minutes-passed").innerHTML = totalMinutes;
      document.querySelector("#seconds-passed").innerHTML = totalSeconds;
    }
    if (runSeconds === input.value * 60) {
      clearInterval(countDown);
      play();
      input.value = ""; // need to set input value back to empty somewhere
    }
  }, 1000);

  function play() {
    let alertSound;
    alertSound = new Audio("./audio/windchimes.wav");
    alertSound.play();
    setTimeout(function () {
      alert("The set time has elapsed");
    }, 1000);
    }
  }

  let resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", function (e) {
    e.preventDefault();
    clearInterval(countDown);
    document.querySelector('#number').value = ''
    document.querySelector("#hours-passed").innerHTML = formatTime(0);
    document.querySelector("#minutes-passed").innerHTML = formatTime(0);
    document.querySelector("#seconds-passed").innerHTML = formatTime(0);
  });


startTime();
