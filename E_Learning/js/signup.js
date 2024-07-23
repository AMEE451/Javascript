import { users } from "../api/api.js";
import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";
let isLogin=localStorage.getItem("isLogin")||false;


document.getElementById("navbar").innerHTML = navbar()

const handledata=(e)=>{
    e.preventDefault()
    
    let user={
        name:getValue("name"),
        email:getValue("email"),
        password:getValue("psw"),
        category:getValue("category")
    }
    localStorage.setItem("data",JSON.stringify(user))
    localStorage.setItem("islogin",true)
    
    let category="Admin"
    if(category=="Admin"){
       window.open("/pages/addcourse.html")
    }
    else{
        window.open("/index.html")
    }
    users.post(user)
}
document.getElementById("signup").addEventListener("submit",handledata)

