
let Places=JSON.parse(localStorage.getItem("tourist"))||[];

const uimaker=()=>{
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
uimaker(Places);
}


const handleproduct=(e)=>{
    e.preventDefault();

    let single={
        image:getvalue("img"),
        title:getvalue("title"),
        cost:getvalue("cost"),
        description:getvalue("des")
    }
    Places[index].push(single)
    localStorage.setItem("tourist",JSON.stringify(Places));
    // window.location.href="/Exam_7/index.html"
}

document.getElementById("places").addEventListener("click",handleproduct)
