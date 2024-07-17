
const youtubeapi = async () => {
    let req = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=java&type=video&key=AIzaSyDkUNu3FUbTZN_H1DTliReqOJQn45QLsmg")
    let res=await req.json()
    // console.log(res.items);
    mapper(res.items)
}
youtubeapi()

const mapper=(data)=>{
    data.map=((ele)=>{
        document.getElementById("show").innerHTML=""

        let title=document.createElement("p")
        title.innerHTML=ele.title;

       
        document.getElementById("show").append(title)
        console.log(title);
    })
    
}