

let runSeconds = 6665
let totalSeconds = runSeconds % 60;
let totalHours = Math.floor(runSeconds / 3600);
let totalMinutes = Math.floor(runSeconds / 60 - totalHours * 60)


console.log(totalSeconds);
console.log(totalMinutes);
console.log(totalHours);


