
let News=JSON.parse(localStorage.getItem("datanews"))||[];

const handlenews=(e)=>{
    e.preventDefault();
    
    let news={
        title:document.getElementById("title").value,
        des:document.getElementById("des").value,
        image:document.getElementById("image").value,
        country:document.getElementById("country").value
    }
    News.push(news)
    localStorage.setItem("datanews",JSON.stringify(News))
    window.location.href="/Exam_5/index.html"
}
document.getElementById("addnews").addEventListener("submit",handlenews)

    // let count=localStorage.getItem("n_like")||0;
    // document.getElementById("n_like").innerHTML=count;
    // console.log("n_like",count);

    // const counter=()=>{
    //     count++;
    //     document.getElementById("n_like").innerHTML=count;
    //     localStorage.setItem("n_like",count)
    // }

    // document.getElementById("like").addEventListener("click",counter)





