import { users } from "../api/api.js";
import getValue from "../components/helper.js"
import navbar from "../components/navbar.js"

let isLogin=localStorage.getItem("isLogin")||false;
document.getElementById("navbar").innerHTML=navbar()

let userData=JSON.parse(localStorage.getItem("data"));

const handleproduct=(e)=>{
    e.preventDefault();
    
    let course={
        title:getValue("title"),
        image:getValue("img"),
        price:getValue("price"),
        topics:getValue("topics")
    }
    localStorage.setItem("data",JSON.stringify(course));
    // window.location.href="/project/pages/Products.html"
    users.post2(course)
    console.log(course);
}

document.getElementById("addcourse").addEventListener("submit",handleproduct)

