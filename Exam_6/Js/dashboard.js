
import {createtag} from "../Components/helper.js"

import navbar from "../Components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

let Students=JSON.parse(localStorage.getItem("book-list"))||[];
let Buy=JSON.parse(localStorage.getItem("buy-list"))||[];

let Totalbooks = 0;

const Delete = (index) => {
    
    Students.splice(index, 1);
    localStorage.setItem("buy-list",JSON.stringify(Buy))
    localStorage.setItem("book-list",JSON.stringify(Students))
   

    Totalbooks = 0;
    document.getElementById("totalbooks").innerHTML = `Total books : ${Totalbooks}`;
    uimaker()
}
document.getElementById("totalbooks").innerHTML = `Total books : ${Totalbooks}`;

const AddData = (index) => {
    Students.splice(index, 1);
    localStorage.setItem("bookmark-list",JSON.stringify(Students))
    localStorage.setItem("book-list",JSON.stringify(Students))
    
    Totalbooks = 0;
    document.getElementById("totalbooks").innerHTML = `Total books : ${Totalbooks}`;

    uimaker()
}

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
        let btn1=createtag("button","Buy")
        let btn2=createtag("button","Add")

        let Buy = document.createElement("td");
        Buy.append(btn1);
        let Add = document.createElement("td");
        Add.append(btn2);

        Buy.addEventListener("click", () => Delete(i));
        Add.addEventListener("click",() => AddData(i))

        tr.append(book_name,author_name,description,date,category,price,Buy,Add)

        document.getElementById("tbody").append(tr)

        Totalbooks ++;
        document.getElementById("totalbooks").innerHTML = `Total Books : ${Totalbooks}`;

    })

    Totalbooks=0;

    localStorage.setItem("buy-list",JSON.stringify(Students))
    localStorage.setItem("bookmark-list",JSON.stringify(Students))
}
uimaker();

Totalbooks = 0;
document.getElementById("totalbooks").innerHTML = `Total Books : ${Totalbooks}`;

const category = (category) =>{
    let temp = Students.filter((ele)=> ele.category == category)
    console.log(temp);
    uimaker(temp)
}
document.getElementById("All").addEventListener("click",()=>uimaker(Students))
document.getElementById("selfhelp").addEventListener("click",()=>category("selfhelp"))
document.getElementById("Finance").addEventListener("click",()=>category("Finance"))
document.getElementById("Fiction").addEventListener("click",()=>category("Fiction"))