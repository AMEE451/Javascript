
import { user } from "../api/api.js";

const handledata=(e)=>{
    e.preventDefault();
    
    let user1={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        email:document.getElementById("email").value,
        password:document.getElementById("psw").value,
    }
    localStorage.setItem("data",JSON.stringify(user))
    localStorage.setItem("islogin",true)
    window.location.href="/Final_Exam/index.html"
    user.post(user1)
}

document.getElementById("signup").addEventListener("submit",handledata)

