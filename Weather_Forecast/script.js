
const uimaker=(data)=>{
    document.getElementById("weather").innerHTML=""
    
    let temp=document.createElement("h1")
    temp.innerHTML=data.main.temp;
    let name=document.createElement("h2")
    name.innerHTML=data.name
    let country=document.createElement("p")
    country.innerHTML=data.sys.country
    let humidity=document.createElement("p")
    humidity.innerHTML=data.main.humidity
    let windSpeed=document.createElement("p")
    windSpeed.innerHTML=data.wind.speed

    let div=document.createElement("div")
    div.append(temp,name,country,humidity,windSpeed)
    document.getElementById("weather").append(div)
}

const getweather = async (cityname) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6c076a9fced43eaa1c0c984820ffc27b&units=metric`)
    let res= await req.json()
    console.log(res);
    uimaker(res)
}

document.getElementById("cityform"),addEventListener("submit",(e)=>{
    e.preventDefault();
    let weather=document.getElementById("city").value
    getweather(weather)
})
