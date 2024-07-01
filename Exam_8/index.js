

const getdata = async () => {

    let req = await fetch("https://dummyjson.com/products")
    let res = await req.json()
    uimaker(res.products)

    document.getElementById("all").addEventListener("click",()=>{
        uimaker(res.products)
    })

    document.getElementById("lth").addEventListener("click",()=>{
        let temp=(res.products).sort((a,b)=>a.price-b.price);
        uimaker(temp);
    })
    document.getElementById("htl").addEventListener("click",()=>{
        let temp=(res.products).sort((a,b)=>b.price-a.price);
        uimaker(temp);
    })

    document.getElementById("search").addEventListener("submit",(e)=>{
        e.preventDefault();
        let value=document.getElementById("searchdata").value
        let temp=(res.products).filter((ele)=>ele.title.includes(value))
        uimaker(temp);
    })

    document.getElementById("Beauty").addEventListener("click",()=>{
        let temp=(res.products).filter((ele)=>ele.category=="beauty")
        uimaker(temp)
    })

    const handlecategory = (category) => {
        let temp =(res.products).filter((ele) => ele.category == category)
        uimaker(temp);
    }
    
    document.getElementById("Beauty").addEventListener("click", () => handlecategory("beauty"));
    document.getElementById("Fragrances").addEventListener("click", () => handlecategory("fragrances"));
    document.getElementById("Furniture").addEventListener("click", () => handlecategory("furniture"));
    document.getElementById("Groceries").addEventListener("click", () => handlecategory("groceries"));

    

}
getdata();

const uimaker = (Data) => {
     document.getElementById("api").innerHTML=""

    Data.map((ele)=>{

        let image=document.createElement("img")
        image.src=ele.thumbnail
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let price=document.createElement("p")
        price.innerHTML=ele.price;
        let div=document.createElement("div")
        div.append(image,title,price)

        div.addEventListener("click",()=>{
            localStorage.setItem("product",ele.id)
            window.location.href="/Exam_8/single.html"
        })

        document.getElementById("api").append(div)
        
    })
}
