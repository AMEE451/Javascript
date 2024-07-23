
let data = JSON.parse(localStorage.getItem("data"))

const handleData = (e) => {
    e.preventDefault();

    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("psw").value
    }

    if (data) {
        if (data.email != user.email) {
            alert("user not found: ")
        }

        else if (data.password != user.password) {
            alert("invalid password: ")
        }
        else {  
            alert("login success: ")
            localStorage.setItem("islogin", true);
            window.location.href="/Final_Exam//index.html"
        }
    }
    else {
        alert("please sign up ")
        window.location.href="/Final_Exam/Pages/signup.html"
    }
}

document.getElementById("login").addEventListener("submit", handleData)
