

let isLogin=localStorage.getItem("isLogin")||false;
let user = JSON.parse(localStorage.getItem("user"))

let cart = JSON.parse(localStorage.getItem("cart")) || [];


const handleqty=(index,opr)=>{
    if(opr=="+"){
        cart[index].qty+=1
    }
    else{
        if(cart[index].qty>1){
            cart[index].qty-=1
        }
        else{
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
    // document.getElementById("count").innerHTML=cart.length
}

const uimaker=(cart)=>{

    document.getElementById("list").innerHTML=""

    cart.map((ele,i)=>{

    let td1=document.createElement("td")
    let img=document.createElement("img")
    img.src=ele.image;
    img.setAttribute("class","img")
    td1.append(img)

    let td2=document.createElement("td")
    td2.innerHTML=ele.name
    let td3=document.createElement("td")
    td3.innerHTML=ele.category
    let td4=document.createElement("td")
    td4.innerHTML=ele.price
    
    let td5=document.createElement("td")
    let btn1=document.createElement("button")
    btn1.innerHTML="-"
    btn1.addEventListener("click",()=>handleqty(i,"-"))

    let btn2=document.createElement("button")
    btn2.innerHTML=ele.qty;
    let btn3=document.createElement("button")
    btn3.innerHTML="+"
    btn3.addEventListener("click",()=>handleqty(i,"+"))

    td5.append(btn1,btn2,btn3)

    let td6=document.createElement("td")
    td6.innerHTML=ele.price*ele.qty
    let td7=document.createElement("td")
    let btn=document.createElement("button")
    btn.innerHTML="Delete"
    td7.append(btn)
    btn.addEventListener("click",()=>handledelete(i))

    let tr=document.createElement("tr")
    tr.append(td1,td2,td3,td4,td5,td6,td7)

    document.getElementById("list").append(tr)
        console.log(tr);
  })
}

uimaker(cart)

