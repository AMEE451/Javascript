
function rolldice(){

    const img=document.getElementById("img");
    let random=Math.floor(Math.random()*6)+1;
    // console.log(img);
    // console.log(random);
    img.setAttribute("src",`${random}.png`)
}

function animation(){
    setTimeout(rolldice,700)

    const img=document.getElementById("img");
    img.setAttribute("src","dice-gif.gif")
}







// const roll=()=>{
//     document.getElementById("dice").innerHTML="";

//     let dice=Math.floor(Math.random()*6)+1;

//     let img1=document.createElement("img");
//     img1.src="./"+dice+".jpg";

//     document.getElementById("dice").append(img1);
// }

// document.getElementById("rolldice").addEventListener("click",roll);


