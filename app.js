// Format the hours, minutes and seconds as 00:00:00
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

// Display current time in timer view
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

// Set event listener to start button, to start running input time
let startButton = document.querySelector("#start-button");
let input = document.querySelector("#number");

startButton.addEventListener("click", function (e) {
  e.preventDefault();
  startButton.disabled = false;
  if (input.value === "") {
    alert("Please enter the number of minutes");
  } else {
    runTime();
    startButton.disabled = true;
  }
});

startButton.addEventListener("click", function (e) {
  e.preventDefault();
  timerTab();
});

// Counting the time from 0 up to the input time
function runTime() {
  let runSeconds = 0;
  let countDown = setInterval(() => {
    if (runSeconds < input.value * 60) {
      ++runSeconds;
      let totalSeconds = runSeconds % 60;
      let totalHours = Math.floor(runSeconds / 3600);
      let totalMinutes = Math.floor(runSeconds / 60 - totalHours * 60);

      totalHours = formatTime(totalHours);
      totalMinutes = formatTime(totalMinutes);
      totalSeconds = formatTime(totalSeconds);
      // Displaying the counter in the timer view
      document.querySelector("#hours-passed").innerHTML = totalHours;
      document.querySelector("#minutes-passed").innerHTML = totalMinutes;
      document.querySelector("#seconds-passed").innerHTML = totalSeconds;
      document.title = totalHours + ":" + totalMinutes + ":" + totalSeconds;
    }
    // When input time is reached, clear counter and play chimes sound
    if (runSeconds === input.value * 60) {
      clearInterval(countDown);
      play();
      input.value = "";
    }
  }, 1000);

  // Play windchimes and show alert message
  function play() {
    let alertSound;
    alertSound = new Audio("./audio/windchimes.wav");
    alertSound.play();
    setTimeout(function () {
      alert("The time has elapsed");
    }, 500);
    setTimeout(function () {
      alert("Icon made by Flat Icons (www.flaticon.com). Font: open source Recurso Sans and GNU Unifont (Roman Czyborra and Paul Hardy).")
    }, 1000)
  }
}

// Reset button to clear input field
document.querySelector("#reset-button").addEventListener("click", function (e) {
  clearInterval(countDown);
  document.querySelector("#number").value = "";
  document.querySelector("#hours-passed").innerHTML = formatTime(0);
  document.querySelector("#minutes-passed").innerHTML = formatTime(0);
  document.querySelector("#seconds-passed").innerHTML = formatTime(0);
  e.preventDefault();
});

// Add button with event listener, plus function to change background color
let body = document.querySelector(".timer-body");
let toggleButton = false;
let colorButton = document.querySelector(".color-button");
colorButton.addEventListener("click", function (e) {
  changeBackground();
  e.preventDefault();
});

function changeBackground() {
  const colors = [
    "#aed6f1",
    "#76d7c4",
    "#f7dc6f",
    "#f8c471",
    "#e74c3c",
    "#f1c40f",
    "#c39bd3",
    "#a569bd",
    "#45b39d",
    "#28b463",
    "#eb984e",
    "#27ae60",
    "#05E3EE",
    "#3498db",
    "#dc7633",
    "#f1c40f",
    "#0ad4d4",
    "#5811a4",
    "#9437f7",
    "#d81b06",
    "#fb311a",
    "#74fb1a",
    "#e4fb1a",
    "#1a55fb",
    "#25418f",
    "#05098a",
    "#1212e0",
    "#f41005",
    "#FFC300", 
  ];
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = newColor;
}

startTime();
