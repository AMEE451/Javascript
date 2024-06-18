
const timer = (min) => {
    let hour = 0;
    let sec = 0;
    let minute = min;
    let min1 = 0;
    let hour1 = 0;

    if (min > 60) {
        min = min % 60;
        minute -= min;
        hour = minute / 60;
    }

    let id = setInterval(() => {

        document.getElementById("counter").innerHTML = `${hour1} : ${min1} : ${sec}`
        
        if (hour1 == hour && min1 == min && sec == 59) {
            clearInterval(id)
            document.getElementById("counter").innerHTML = "End"
        }

        if (min1 == 59 && sec == 59) {
            hour1 += 1;
            min1 = 0;
        }
        if (sec == 59) {
            min1 += 1;
            sec = 0;
        }
    }, 1000)
}

const handledata = (e) => {
    e.preventDefault();
    let min = document.getElementById("minute").value
    timer(min)
}
document.getElementById("data").addEventListener("submit", handledata)