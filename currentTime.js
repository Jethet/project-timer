const today = new Date()
let hour = today.getHours();
let minute = today.getMinutes();

function formatTime(hour, minute) {
    
    if (hour.toString().length < 2) {
        hour = '0' + hour
    }
     if (minute.toString().length < 2) {
        minute = '0' + minute
    }
    return `Current Time: ${hour} : ${minute}`
}

console.log(formatTime(hour, minute))