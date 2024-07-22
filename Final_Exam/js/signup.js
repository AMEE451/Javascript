
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
    window.location.href="/index.html"
    user.post(user1)
}

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

const getweather = async (cityname) => {
   
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6c076a9fced43eaa1c0c984820ffc27b&units=metric`)
    let res= await req.json()
    console.log(res);
    uimaker(res)
    clock()
}



document.getElementById("cityform"),addEventListener("submit",(e)=>{
    e.preventDefault();
    let weather=document.getElementById("city").value
    getweather(weather)
})

document.getElementById("signup").addEventListener("submit",handledata)
