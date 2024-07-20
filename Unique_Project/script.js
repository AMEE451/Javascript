let windows = document.getElementById("windows")
let startmenu = document.getElementById("startmenu")

windows.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px"
    }
    else {
        startmenu.style.bottom = "50px"
    }
})

let chromebtn = document.getElementById("chromebtn")
chromebtn.addEventListener("click", () => {
    window.location.href = "https://www.google.co.in/"
})

let Edge = document.getElementById("edge")
Edge.addEventListener("click", () => {
    window.location.href = "https://www.microsoft.com/"
})

let Store = document.getElementById("store")
Store.addEventListener("click", () => {
    window.location.href = "https://apps.microsoft.com/"
})

let Msword = document.getElementById("msword")
Msword.addEventListener("click", () => {
    window.location.href = "https://www.microsoft.com/en-in/microsoft-365/free-office-online-for-the-web"
})

let vscode = document.getElementById("vscode")
vscode.addEventListener("click", () => {
    window.location.href = "https://code.visualstudio.com/"
})

let weather = document.getElementById("weather")
weather.addEventListener("click", () => {
    window.location.href = "https://www.accuweather.com/en/world-weather"
})

let anydesk = document.querySelector(".icon3")
anydesk.addEventListener("click", () => {
    window.location.href = "https://anydesk.com/en"
})

let adobe = document.querySelector(".icon6")
adobe.addEventListener("click", () => {
    window.location.href = 'https://adobe-reader.en.softonic.com/'
})

let youtube = document.querySelector(".icon7")
youtube.addEventListener("click", () => {
    window.location.href = 'https://www.youtube.com/'
})

let openoffice = document.querySelector(".icon8")
openoffice.addEventListener("click", () => {
    window.location.href = 'https://www.openoffice.org/'
})

let typingmaster = document.querySelector(".icon9")
typingmaster.addEventListener("click", () => {
    window.location.href = 'https://www.typingmaster.com/'
})

let devc = document.querySelector(".icon10")
devc.addEventListener("click", () => {
    window.location.href = 'https://www.bloodshed.net/'
})



