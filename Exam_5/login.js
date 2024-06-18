
let user = JSON.parse(localStorage.getItem("data"))

const HandleData = (e) => {
    e.preventDefault();

    let login_user = {
        l_email: document.getElementById("l_email").value,
        l_pswd: document.getElementById("l_pswd").value,
    }
    
    if (login_user.l_email != user.email) {
        alert("User not found")
    }
    else if (login_user.l_pswd != user.pswd) {
        alert("Incorrect Password")
    }
    else {
        alert("Login Successfull")
        window.location.href = "/Exam_5/index.html"
    }

    localStorage.setItem("data2", JSON.stringify(login_user))
    
}
document.getElementById("loginuser").addEventListener("submit", HandleData)