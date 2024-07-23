import { users } from "../api/api.js";
import { createtag } from "../components/helper.js";
import navbar from "../components/navbar.js";
// let isLogin = localStorage.getItem("isLogin") || false;
document.getElementById("navbar").innerHTML = navbar()

let data = await users.Get2()

const uimaker = async () => {

  document.getElementById("course").innerHTML = "";

  data.map((ele) => {
    let image = createtag("img")
    image.src = ele.image;
    let title = createtag("h3")
    title.innerHTML = ele.title;
    let price = createtag("h3")
    price.innerHTML = ele.price;
    let topics = createtag("p")
    topics.innerHTML = ele.topics

    let btn = document.createElement("button")
    btn.innerHTML = "Purchase Course"

    let div = document.createElement("div")
    div.append(image, title,price,topics,btn)

    // btn.addEventListener("click", () => handlecart(ele))
    div.setAttribute("class", "div")

    document.getElementById("course").append(div)
  })
}

uimaker(data)

// const isexists = (id) => {
//   let temp = cart.filter((ele) => ele.id == id)
//   return temp.length > 0 ? true : false
// }
// console.log(cart)

// const handlecart = (ele) => {
//   isexists()
//   if (isexists(ele.id)) {
//       cart.map((item, index) => {
//           if (item.id == ele.id) {
//               cart[index].qty += 1;
//           }
//       })
//       alert("qty added to cart")
//   }
//   else {
  
//       cart.push({...ele,qty:1})
//       alert("added to cart")

//   }
//   localStorage.setItem("cart", JSON.stringify(cart))
//   console.log(cart);
// } 


const handlesort = (sort) => {
  if (sort == "LTH") {
      let temp = cart.sort((a, b) => a.price - b.price);
      uimaker(temp)
  }
  else {
      let temp = cart.sort((a, b) => b.price - a.price);
      uimaker(temp)
  }

}

document.getElementById("lth").addEventListener("click", () => handlesort("LTH"));
document.getElementById("htl").addEventListener("click", () => handlesort("HTL"));


const handlecategory = (value) => {
  let temp = cart.filter((ele) => ele.title == value)
  uimaker(temp);

}

document.getElementById("Frontend").addEventListener("click", () => handlecategory("Frontend"));
document.getElementById("Backend").addEventListener("click", () => handlecategory("Backend"));
document.getElementById("UI/UX").addEventListener("click", () => handlecategory("UI/UX"));
document.getElementById("fullstack").addEventListener("click", () => handlecategory("Full Stack"));
document.getElementById("graphic").addEventListener("click", () => handlecategory("Grapihic Designing"));
document.getElementById("animation").addEventListener("click", () => handlecategory("Animation"));
