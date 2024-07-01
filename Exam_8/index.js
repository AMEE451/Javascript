
const getdata = async () => {
    let req = await fetch("https://dummyjson.com/products")
    let res = await req.json()
    uimaker(res.products)
}
getdata();

const uimaker = (Data) => {

    Data.map((ele,i)=>{

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

// const filter=()=>{
//     let temp=res.products.filter=()
// }