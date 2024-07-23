
import { user } from "../api/api.js";

const handledata=(e)=>{
    e.preventDefault();
    
    let user1={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        email:document.getElementById("email").value,
        password:document.getElementById("psw").value,
    }
    // localStorage.setItem("data",JSON.stringify(user))
    localStorage.setItem("islogin",true)
    window.location.href="/Final_Exam/index.html"
    user.post(user1)
}

document.getElementById("signup").addEventListener("submit",handledata)

const getweatherbylocation=async(lat,long)=>{

    let req=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6c076a9fced43eaa1c0c984820ffc27b&units=metric`)
    let res=await req.json()
    console.log(res);
    uimaker(res)
}

const getlocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude
        let long = position.coords.longitude
        getweatherbylocation(lat, long)

    })
}

getlocation();

const getWeather = async (cityName) => {
    try {
        let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6c076a9fced43eaa1c0c984820ffc27b&units=metric`);
        let res = await req.json();
        console.log(res);
        uimaker(res);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

const getCityName = async (lat, lon) => {
    try {
        let req = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        let res = await req.json();
        return res.city || res.locality || res.principalSubdivision || "Unknown location";
    } catch (error) {
        console.error("Error fetching city name:", error);
        return "Unknown location";
    }
};

const handleLocationAndWeather = async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            let cityName = await getCityName(lat, lon);
            console.log(`Detected city: ${cityName}`);
            getWeather(cityName);
        }, (error) => {
            console.error("Error getting location:", error);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
};
