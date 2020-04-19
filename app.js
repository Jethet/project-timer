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
  startButton.disabled = false
  if (input.value === "") {
    alert("Please enter the number of minutes");
  } else {
    runTime();
    startButton.disabled = true
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
      alert("The set time has elapsed");
    }, 1000);
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
let colorButton = document.querySelector(".color-button")
colorButton.addEventListener("click", function (e) {
  changeBackground()
  e.preventDefault()
})

function changeBackground() {
  let body = document.querySelector('.timer-body')
  console.log(body);
  
  if(body.style.background === '#AFDCFB') {
    body.style.background = '#05E3EE'
   
  } else {
    body.style.background = '#AFDCFB'
  }
}

startTime();
