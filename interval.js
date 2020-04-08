let target = 0;

// let countDown = setInterval(() => {
//   ++target;
//   if (target < 6) {
//     console.log("hello");
//   } else {
//     clearInterval(countDown);
//   }
// }, 1000);

let totalMinutes = 0;

function runTime(minutes) {
  if (!minutes > 0) {
    console.log("Please enter the number of minutes");
  }
  let countDown = setInterval(() => {
    if (totalMinutes < minutes) {
      ++totalMinutes;
      console.log(totalMinutes);
    } else {
      clearInterval(countDown);
    }
  }, 1000);
}

runTime(8);
