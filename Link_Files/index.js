
let products=JSON.parse(localStorage.getItem('products'))||[];

const handledata=(e)=>{
    e.preventDefault();

    let product={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        img:document.getElementById("img").value
    }
    products.push(product)
    localStorage.setItem("products",JSON.stringify(products));

    window.location.href="/Link_Files/add.html"
}

document.getElementById("addproduct").addEventListener("submit",handledata)