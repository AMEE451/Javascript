import {createtag} from "../Components/helper.js"
import navbar from "../Components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

let Students=JSON.parse(localStorage.getItem("buy-list"))||[];

const uimaker=()=>{

    document.getElementById("tbody").innerHTML="";
    Students.map((ele,i)=>{

        let tr = document.createElement("tr")

        let book_name=createtag("td",ele.book_name)
        let author_name=createtag("td",ele.author_name)
        let description=createtag("td",ele.description)
        let date=createtag("td",ele.date)
        let category=createtag("td",ele.category)
        let price=createtag("td",ele.price)

        tr.append(book_name,author_name,description,date,category,price)

        document.getElementById("tbody").append(tr)

    })

}
uimaker();