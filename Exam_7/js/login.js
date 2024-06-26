import navbar from "../components/navbar.js"
import getvalue from "../components/helper.js";
document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("user"))

const handleData = (e) => {
    e.preventDefault();

    let user = {
        email: getvalue("email"),
        password: getvalue("password"),
    }

    if (data) {
        if (data.email != user.email) {
            alert("user not found: " + user.email)
        }

        else if (data.password != user.password) {
            alert("invalid password: " + user.password)
        }
        else {  
            alert("login success: " + user.username)
            localStorage.setItem("islogin", true);
            window.location.href="/Exam_7/index.html"
        }
    }
    else {
        alert("please sign up ")
        window.location.href="/Exam_7/pages/signup.html"
    }
}

document.getElementById("data").addEventListener("submit", handleData)

