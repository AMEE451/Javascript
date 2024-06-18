import getValue from "../Components/helper.js";

const handleData = (e) => {
    e.preventDefault();
    
    let user = {
        username: getValue("username"),
        email: getValue("email"),
        password: getValue("password"),
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true);
    window.location.href="/Project/index.html"
}

document.getElementById("userData").addEventListener("submit", handleData)