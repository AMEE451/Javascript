
let data=JSON.parse(localStorage.getItem("product"))

const getdata = async (id) => {
    let req = await fetch(`https://dummyjson.com/products/${id}`)
    let res = await req.json()
    uimaker(res)
    console.log(res);  
}
getdata(data);
console.log(data);


const uimaker=(Data)=>{

        let image=document.createElement("img");
        image.src=Data.thumbnail;
        let title=document.createElement("p")
        title.innerHTML=Data.title
        let price=document.createElement("p")
        price.innerHTML=Data.price;
        let description=document.createElement("p")
        description.innerHTML=Data.description;
        let category=document.createElement("p")
        category.innerHTML=Data.category;
        let discountPercentage=document.createElement("p")
        discountPercentage.innerHTML=Data.discountPercentage;
        let rating=document.createElement("p")
        rating.innerHTML=Data.rating;
        let stock=document.createElement("p")
        stock.innerHTML=Data.stock;
        let brand=document.createElement("p")
        brand.innerHTML=Data.brand;

        let div=document.createElement("div")
        div.append(image,title,price,description,category,discountPercentage,rating,stock,brand)

        document.getElementById("single").append(div)


        Data.reviews.map((ele)=>{
            let reviews=document.createElement("p")
            reviews.innerHTML=`Rating:${ele.rating}`;
            let comment=document.createElement("p")
            comment.innerHTML=`Comment:${ele.comment}`;
            let date=document.createElement("p")
            date.innerHTML=`Date : ${ele.date}`;
            let reviewerName=document.createElement("p")
            reviewerName.innerHTML=`reviewerName : ${ele.reviewerName}`;
            let div=document.createElement("div")
            div.append(reviews,comment,date,reviewerName)

            document.getElementById("single").append(div)
        }) 
    
}


