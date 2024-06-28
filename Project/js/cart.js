
import { createtag } from "../Components/helper.js"
import navbar from "../Components/navbar.js"

let isLogin=localStorage.getItem("isLogin")||false;
let userData = JSON.parse(localStorage.getItem("user"))
document.getElementById("navbar").innerHTML = navbar();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (isLogin) {
    document.getElementById("navbar").innerHTML = navbar("logout", userData.username)
}
else {
    window.location.href = "/project/pages/Login.html"
}

document.getElementById("count").innerHTML=cart.length

const handleqty=(index,opr)=>{
    if(opr=="+"){
        cart[index].qty+=1
    }
    else{
        if(cart[index].qty>1){
            cart[index].qty-=1
        }
        else{
            // handledelete(index)
            alert("quantity should be greater than 1")
        }
    }
    uimaker(cart)
    localStorage.setItem("cart",JSON.stringify(cart))
}

const handledelete=(index)=>{
    cart.splice(index, 1)
    uimaker(cart)
    localStorage.setItem("cart",JSON.stringify(cart))
    document.getElementById("count").innerHTML=cart.length
}

const uimaker=(cart)=>{

    document.getElementById("list").innerHTML=""

    cart.map((ele,i)=>{

    let td1=document.createElement("td")
    let img=createtag("img",ele.image)
    td1.append(img)

    let td2=createtag("td",ele.title)
    let td3=createtag("td",ele.category)
    let td4=createtag("td",ele.price)
    
    let td5=document.createElement("td")
    let btn1=createtag("button","-")
    btn1.addEventListener("click",()=>handleqty(i,"-"))

    let btn2=createtag("button",ele.qty)
    let btn3=createtag("button","+")
    btn3.addEventListener("click",()=>handleqty(i,"+"))

    td5.append(btn1,btn2,btn3)

    let td6=createtag("td",ele.price*ele.qty)
    let td7=document.createElement("td")
    let btn=createtag("button","Delete")
    td7.append(btn)
    btn.addEventListener("click",()=>handledelete(i))

    let tr=document.createElement("tr")
    tr.append(td1,td2,td3,td4,td5,td6,td7)

    document.getElementById("list").append(tr)

  })
}

uimaker(cart)