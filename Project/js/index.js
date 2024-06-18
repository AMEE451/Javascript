
import navbar from "../Components/navbar.js";
let isLogin=localStorage.getItem("isLogin")||false;
// let userData=JSON.parse(localStorage.getItem("user"))

document.getElementById("navbar").innerHTML = navbar()

if (isLogin) {
    document.getElementById("navbar").innerHTML = navbar("logout", userData.username)
}
else {
    window.location.href = "/project/pages/Login.html"
}

document.getElementById("logout").addEventListener("clcik",(e)=>{
    e.preventDefault();
    if(isLogin==false){
        localStorage.removeItem("isLogin")
    }
})