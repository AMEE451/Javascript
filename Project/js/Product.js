
import getvalue from "../Components/helper.js";
import { createtag } from "../Components/helper.js"
import navbar from "../Components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()


let Products = JSON.parse(localStorage.getItem("Product")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("count").innerHTML=cart.length


const uimaker = (data) => {

    document.getElementById("Allproducts").innerHTML = "";

    data.map((ele) => {
        let image = createtag("img", ele.image)
        let price = createtag("p", ele.price)
        let title = createtag("h3", ele.title)
        let category = createtag("p", ele.category)
        let btn = createtag("button", "Buy")
        let div = document.createElement("div")
        btn.addEventListener("click", () => handlecart(ele))
        div.append(image, title, price, category, btn)

        document.getElementById("Allproducts").append(div)
    })
    console.log(Products);
}
uimaker(Products);


const isexists = (id) => {
    let temp = cart.filter((ele) => ele.id == id)
    return temp.length > 0 ? true : false
}

const handlecart = (ele) => {
    isexists()
    if (isexists(ele.id)) {
        cart.map((item, index) => {
            if (item.id == ele.id) {
                cart[index].qty += 1;
            }
        })
        alert("qty added to cart")
    }
    else {
    
        cart.push({...ele,qty:1})
        alert("added to cart")
        document.getElementById("count").innerHTML=cart.length

    }
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);
} 

// Sort with "value"

const handlesort = (sort) => {
    if (sort == "LTH") {
        let temp = Products.sort((a, b) => a.price - b.price);
        uimaker(temp)
        // console.log(temp);
    }
    else {
        let temp = Products.sort((a, b) => b.price - a.price);
        uimaker(temp)
        // console.log(temp);
    }

}

document.getElementById("lth").addEventListener("click", () => handlesort("LTH"));
document.getElementById("htl").addEventListener("click", () => handlesort("HTL"));

//Sort with "id"

const handleSort = (sort) => {
    if (sort == "lth") {
        let temp = Products.sort((a, b) => a.price - b.price);
        uimaker(temp)
        // console.log(temp);
    }
    else {
        let temp = Products.sort((a, b) => b.price - a.price);
        uimaker(temp)
        // console.log(temp);
    }

}

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

//filter with "value"

const handlecategory = (category) => {
    let temp = Products.filter((ele) => ele.category == category)
    uimaker(temp);
    // console.log(temp);
}

document.getElementById("men").addEventListener("click", () => handlecategory("Men"));
document.getElementById("women").addEventListener("click", () => handlecategory("Women"));
document.getElementById("kids").addEventListener("click", () => handlecategory("Kids"));

//filter with "id"

// const category = (id) => {
//     let temp = Products.filter((ele) => ele.category == id)
//     uimaker(temp);
//     console.log(temp);
// }

// document.getElementById("men").addEventListener("click", () => category("men"));
// document.getElementById("women").addEventListener("click", () => category("women"));
// document.getElementById("kids").addEventListener("click", () => category("kids"));

//search for products

const SearchData = (value) => {
    let temp = Products.filter((ele) => ele.title.includes(value)); // OR ele.title==value
    uimaker(temp)
}

const handleSearch = (e) => {
    e.preventDefault();
    let search = getvalue("searchvalue");
    SearchData(search);

}

document.getElementById("search").addEventListener("submit", handleSearch)

//search with keypress

const handlekeypress = (e) => {

    // if(e.key=="Enter"){
    let search = getvalue("searchvalue");
    SearchData(search)
    // }
}

document.getElementById("searchvalue").addEventListener("keypress", handlekeypress)

