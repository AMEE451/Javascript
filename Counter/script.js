
let custom_time = new Date();

let day = custom_time.getDay();

if (day == 0) {
    document.getElementById("day").innerHTML = "SUNDAY";
}
else if (day == 1) {
    document.getElementById("day").innerHTML = "MONDAY";
}
else if (day == 2) {
    document.getElementById("day").innerHTML = "TUESDAY";
}
else if (day == 3) {
    document.getElementById("day").innerHTML = "WEDNESDAY";
}
else if (day == 4) {
    document.getElementById("day").innerHTML = "THURSDAY";
}
else if (day == 5) {
    document.getElementById("day").innerHTML = "FRIDAY";
}
else if (day == 6) {
    document.getElementById("day").innerHTML = "SATURDAY";
}


setInterval(() => {

    let Date = custom_time.getDate();
    let Month = custom_time.getMonth();
    let Year = custom_time.getFullYear();
    document.getElementById("date").innerHTML = (`${Date}/${Month + 1}/${Year}`)
}, 1000)

setInterval(() => {

    let Custom_Time = new Date();

    let Hours = Custom_Time.getHours();
    let Minutes = Custom_Time.getMinutes();
    let Seconds = Custom_Time.getSeconds();

    // if (Hours > 12) {
    //     Hours -= 12;
    // }
    let AmPm = Hours >= 12 ? "PM" : "AM"
    document.getElementById("time").innerHTML = (`${Hours}:${Minutes}:${Seconds} ${AmPm}`)
}, 1000);






