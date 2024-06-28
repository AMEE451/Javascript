import getValue from "../Components/helper.js"
import navbar from "../Components/navbar.js"

let isLogin=localStorage.getItem("isLogin")||false;
let userData=JSON.parse(localStorage.getItem("user"))
document.getElementById("navbar").innerHTML=navbar()

if (isLogin) {

    document.getElementById("navbar").innerHTML = navbar("logout", userData.username)
}
else {
    window.location.href = "/project/pages/Login.html"
    // alert("You cannot add product without signing in")
}

let Products=JSON.parse(localStorage.getItem("Product"))||[];

const handleproduct=(e)=>{
    e.preventDefault();
    
    let n=Products.length-1;
    let product={
        title:getValue("title"),
        price:getValue("price"),
        image:getValue("img"),
        category:getValue("category"),
        id:Products.length==0 ? 1 : Products[n].id+1
    }
    Products.push(product)
    localStorage.setItem("Product",JSON.stringify(Products));
    window.location.href="/project/pages/Products.html"
}

document.getElementById("productdata").addEventListener("submit",handleproduct)