
import getvalue from "../Components/helper.js"
import navbar from "../Components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
// console.log(navbar);
let Students=JSON.parse(localStorage.getItem("book-list"))||[];

const handleData = (e) => {
    e.preventDefault();
    
    let student = {
        book_name: getvalue("book_name"),
        author_name: getvalue("author_name"),
        description: getvalue("description"),
        date: getvalue("date"),
        category: getvalue("category"),
        price: getvalue("price"),
    }
    Students.push(student);
    localStorage.setItem("book-list", JSON.stringify(Students));

    window.location.href="/exam_6/Pages/Dashboard.html"
}

document.getElementById("home").addEventListener("submit", handleData)