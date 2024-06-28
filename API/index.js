
const getdata = async () => {
    let request = await fetch("https://fakestoreapi.com/products")
    let response = await request.json()
    // console.log(response);  
    mapper(response)
}
getdata();

const mapper = (data) => {

    data.map((ele) => {

        let image = document.createElement("img")
        image.src = ele.image
        image.setAttribute("class","img")

        let title = document.createElement("h1")
        title.innerHTML = ele.title
        let price=document.createElement("h4")
        price.innerHTML=`Price : ${ele.price}`
        let description=document.createElement("p")
        description.innerHTML=ele.description
        let category=document.createElement("h4")
        category.innerHTML=ele.category
        let rate=document.createElement("p")
        rate.innerHTML=`Rate : ${ele.rating.rate}`
        let count=document.createElement("p")
        count.innerHTML=`Count : ${ele.rating.count}`

        let div=document.createElement("div")
        div.append(image,title,price,description,category,rate,count)
        div.setAttribute("class","div")

        document.getElementById("api").append(div) 
    })
}