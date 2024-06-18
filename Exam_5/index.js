
let user=JSON.parse(localStorage.getItem('data'))

const uimaker=(user)=>{

    let image=document.createElement('img')
    image.src=user.image;
    image.setAttribute("class","p_img")
    let name=document.createElement('h4')
    name.innerHTML=user.name;
    let email=document.createElement('p')
    email.innerHTML=user.email;
    let country=document.createElement('p')
    country.innerHTML=user.country;

    
    let div=document.createElement('div')
    div.append(image,name,email,country)
    div.setAttribute("class","profile")

    document.getElementById("add").append(div)
   
}
uimaker(user)


// let count=localStorage.getItem("n_like")||0;
//     document.getElementById("n_like").innerHTML=count;
//     console.log("n_like",count);

//     const counter=()=>{
//         count++;
//         document.getElementById("n_like").innerHTML=count;
//         localStorage.setItem("n_like",count)
//     }

//     document.getElementById("like").addEventListener("click",counter)



let News=JSON.parse(localStorage.getItem('datanews'))||[];

const Uimaker=()=>{

    document.getElementById("addnews").innerHTML=""
  
    News.map((ele)=>{ 
    let title=document.createElement('h1')
    title.innerHTML=ele.title;
    title.setAttribute("class","title")
    let des=document.createElement('p')
    des.innerHTML=ele.des;
    des.setAttribute("class","des")
    let image=document.createElement('img')
    image.src=ele.image;
    image.setAttribute("class","n_img")
    let btn1=document.createElement('button')
    btn1.innerHTML="Like"
    btn1.setAttribute("class","btnn")
    
    let btn2=document.createElement('button')
    btn2.innerHTML="share"
    btn2.setAttribute("class","btnn")

    let btn_div=document.createElement('div')
    btn_div.append(btn1,btn2)
    btn_div.setAttribute("class","btn_div")

    let div=document.createElement('div')
    div.append(image,title,des,btn_div)
    div.setAttribute("class","news")

    document.getElementById("addnews").append(div)

    })
}
Uimaker()




