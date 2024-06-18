
let products = JSON.parse(localStorage.getItem('products')) || [];

const deleteproduct = (idx) => {
    products.splice(idx, 1)
    uimaker()
    localStorage.setItem("products", JSON.stringify(products));
}


const uimaker = () => {

    document.getElementById("products").innerHTML = ""

    products.map((ele, index) => {

        let title = document.createElement('h1')
        title.innerHTML = ele.title

        let price = document.createElement('p')
        price.innerHTML = ele.price

        let image = document.createElement('img')
        image.src = ele.img;

        let btn = document.createElement('button')
        btn.innerHTML = "Delete"

        btn.addEventListener("click", () => deleteproduct(index));

        let div = document.createElement('div')
        div.append(title, price, image, btn)

        document.getElementById("products").append(div)

    })

}
uimaker();