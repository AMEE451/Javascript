import navbar from "../components/navbar.js";
let isLogin=localStorage.getItem("isLogin")||false;


document.getElementById("navbar").innerHTML = navbar()