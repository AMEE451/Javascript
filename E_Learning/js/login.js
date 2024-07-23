
import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";
let isLogin=localStorage.getItem("isLogin")||false;


document.getElementById("navbar").innerHTML = navbar()

let logindata = JSON.parse(localStorage.getItem("data"))

const handleData = (e) => {
    e.preventDefault();

    let user = {
        email: getValue("email"),
        password: getValue("psw")
    }

    if (logindata) {
        if (logindata.email != user.email) {
            alert("user not found: ")
        }

        else if (logindata.password != user.password) {
            alert("invalid password: ")
        }
        else {  
            alert("login success: ")
            localStorage.setItem("islogin", true);
            window.location.href="/index.html"
        }
    }
    else {
        alert("please sign up ")
        window.location.href="pages/signup.html"
    }
}

document.getElementById("login").addEventListener("submit", handleData)
