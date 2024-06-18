
import {createtag} from "../Components/helper.js"
import navbar from "../Components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()

let Products=JSON.parse(localStorage.getItem("Product"))||[];

const uimaker=(data)=>{

    document.getElementById("Allproducts").innerHTML="";
    data.map((ele)=>{
        let image=createtag("img",ele.image)
        let price=createtag("p",ele.price)
        let title=createtag("h3",ele.title)
        let category=createtag("p",ele.category)
        let btn=createtag("button","Buy")
        let div=document.createElement("div")
        div.append(image,title,price,category,btn)

        document.getElementById("Allproducts").append(div)
    })
    // console.log(Products);
}
uimaker(Products);



const handlesort=(sort)=>{
    if (sort=="LTH"){
        let temp=Products.sort((a,b)=>a.price-b.price);
        uimaker(temp)
        console.log(temp);
    }
    else{
        let temp=Products.sort((a,b)=>b.price-a.price);
        uimaker(temp)
        console.log(temp);
    }

}

document.getElementById("lth").addEventListener("click",()=>handlesort("LTH"));
document.getElementById("htl").addEventListener("click",()=>handlesort("HTL"));

const handleSort=(sort)=>{
    if (sort=="lth"){
        let temp=Products.sort((a,b)=>a.price-b.price);
        uimaker(temp)
        console.log(temp);
    }
    else{
        let temp=Products.sort((a,b)=>b.price-a.price);
        uimaker(temp)
        console.log(temp);
    }

}

document.getElementById("lth").addEventListener("click",()=>handleSort("lth"));
document.getElementById("htl").addEventListener("click",()=>handleSort("htl"));


const handlecategory=(category)=>{
    let temp=Products.filter((ele)=>ele.category==category)
    uimaker(temp);
    console.log(temp);
}

document.getElementById("men").addEventListener("click",()=>handlecategory("Men"));
document.getElementById("women").addEventListener("click",()=>handlecategory("Women"));
document.getElementById("kids").addEventListener("click",()=>handlecategory("Kids"));

const category=(id)=>{
    let temp=Products.filter((ele)=>ele.category==id)
    uimaker(temp);
    console.log(temp);
}

document.getElementById("men").addEventListener("click",()=>category("men"));
document.getElementById("women").addEventListener("click",()=>category("women"));
document.getElementById("kids").addEventListener("click",()=>category("kids"));


