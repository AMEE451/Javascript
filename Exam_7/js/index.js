import navbar from "../components/navbar.js"
import { createtag } from "../components/helper.js";
document.getElementById("navbar").innerHTML = navbar();

let Places=JSON.parse(localStorage.getItem("tourist"))||[];

const handlelike=(index)=>{
    Places[index].like+=1;
    uimaker(Places)
    localStorage.setItem("tourist",JSON.stringify(Places))
}


const uimaker = (data) => {

    document.getElementById("touristplaces").innerHTML = "";

    data.map((ele,i) => {
        let image = createtag("img", ele.image)
        let title = createtag("h1", ele.title)
        let cost = createtag("h4", ele.cost)
        let description=createtag("p",ele.description)
        let btn1= createtag("button", "like")
        btn1.innerHTML=`Like:${ele.like}`;
        btn1.addEventListener("click",()=>handlelike(i))

        let btn2 = createtag("button", "wishlist")
        let div = document.createElement("div")
        div.append(image, title, cost, description, btn1, btn2)

        document.getElementById("touristplaces").append(div)
    })
}
uimaker(Places);

const datasearch = (value) => {
    let temp = Places.filter((ele) => ele.title.includes(value));
    uimaker(temp)
}
// console.log(datarch);

const handlekeypress = (e) => {

    if(e.key=="Enter"){
    let search = document.getElementById("search").value;
    datasearch(search)
    }
}

document.getElementById("search").addEventListener("keypress", handlekeypress)


const handlesort = (sort) => {
    if (sort == "like2") {
        let temp = Places.sort((a, b) => a.like -b.like);
        uimaker(temp)
    }
    else if (sort=="like1"){
        let temp = Places.sort((a, b) => b.like - a.like);
        uimaker(temp)
    }
    else if(sort=="cost2"){
        let temp = Places.sort((a, b) => a.cost -b.cost);
        uimaker(temp)
    }
    else {
        let temp = Places.sort((a, b) => b.cost -a.cost);
        uimaker(temp)
    }
}

document.getElementById("like1").addEventListener("click", () => handlesort("like1"));
document.getElementById("like2").addEventListener("click", () => handlesort("like2"));

document.getElementById("cost1").addEventListener("click", () => handlesort("cost1"));
document.getElementById("cost2").addEventListener("click", () => handlesort("cost2"));


