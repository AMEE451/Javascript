import navbar from "../components/navbar.js"
import { createtag } from "../components/helper.js";
document.getElementById("navbar").innerHTML = navbar();

const uimaker = (data) => {

    document.getElementById("touristplaces").innerHTML = "";

    data.map((ele,i) => {
        let image = createtag("img", ele.image)
        let title = createtag("p", ele.title)
        let cost = createtag("h3", ele.cost)
        let description=createtag("p",ele.description)
        let btn1= createtag("button", "like")
        btn1.addEventListener("click",()=>handlelike(i))

        let btn2 = createtag("button", "wishlist")
        let div = document.createElement("div")
        div.append(image, title, cost, description, btn1, btn2)

        document.getElementById("touristplaces").append(div)
        window.location.href="/Exam_7/index.html"
    })
    
}
uimaker(Places);

document.getElementById("places").addEventListener("click",)
