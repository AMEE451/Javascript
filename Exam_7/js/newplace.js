import getvalue from "../components/helper.js";
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

let Places=JSON.parse(localStorage.getItem("tourist"))||[];

const handleproduct=(e)=>{
    e.preventDefault();

    let place={
        image:getvalue("img"),
        title:getvalue("title"),
        cost:getvalue("cost"),
        description:getvalue("des"),
        like:0
    }
    Places.push(place)
    localStorage.setItem("tourist",JSON.stringify(Places));
    window.location.href="/Exam_7/index.html"
}

document.getElementById("places").addEventListener("submit",handleproduct)