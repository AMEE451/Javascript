const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// let count=localStorage.getItem("likes")||0;
// document.getElementById("a_like").innerHTML=count;

// const counter=()=>{
//     count++;
//     document.getElementById("a_like").innerHTML=count;
//     localStorage.setItem("likes",count)
// }

// document.getElementById("like").addEventListener("click",counter);


// let count2=localStorage.getItem("comments")||0;
// document.getElementById("a_comment").innerHTML=count2;

// const counter2=()=>{
//     count2++;
//     document.getElementById("a_comment").innerHTML=count2;
//     localStorage.setItem("comments",count2)
// }

// document.getElementById("comment").addEventListener("click",counter2);


// let count3=localStorage.getItem("followers")||0;
// document.getElementById("a_follow").innerHTML=count3;

// const counter3=()=>{
//     count3++;
//     document.getElementById("a_follow").innerHTML=count3;
//     localStorage.setItem("followers",count3)
// }

// document.getElementById("follow").addEventListener("click",counter3);


// let count4=sessionStorage.getItem("share")||0;
// document.getElementById("a_share").innerHTML=count4;

// const counter4=()=>{
//     count4++;
//     document.getElementById("a_share").innerHTML=count4;
//     sessionStorage.setItem("share",count4)
// }

// document.getElementById("share").addEventListener("click",counter4);


// let count1,count2,count3,count4;

// let count=localStorage.getItem(id)||0;
// document.getElementById(id).innerHTML=count;

// const local=(id,count)=>{
//     count++;
//     document.getElementById(id).innerHTML=count;
//     localStorage.setItem(id,count);
// }

// let countt=sessionStorage.getItem(id1)||0;
// const session=(id1,count)=>{
//     count++;
//     document.getElementById(id1).innerHTML=countt;
//     sessionStorage.setItem(id1,count);
// }

// let counter=(click,id,count,storage)=>{
//     local(id,count)
//     session(id1,count)
// }

// document.getElementById("like").addEventListener("click",()=>{
//     counter("like","a_like",count1,localStorage)
// })
// document.getElementById("like").addEventListener("click",()=>{
//     counter("comment","a_comment",count2,localStorage)
// })
// document.getElementById("like").addEventListener("click",()=>{
//     counter("follow","a_follow",count3,localStorage)
// })
// document.getElementById("like").addEventListener("click",()=>{
//     counter("share","a_share",count4,sessionStorage)
// })


// let count1=localstorage.getItem("count1")||0;
// document.getElementById("Count1").innerhtml=count1;

// const count=(id)=>{
//     let lcf=localStorage.getItem(id)||0;
//     document.getElementById(id).innerhtml=lcf;
// }
// count("a_like","a_comment","a_follow")

let count1=localStorage.getItem("a_like")||0;
document.getElementById("a_like").innerHTML=count1;

let count2=localStorage.getItem("a_comment")||0;
document.getElementById("a_comment").innerHTML=count2;

let count3=localStorage.getItem("a_follow")||0;
document.getElementById("a_follow").innerHTML=count3;

let count4=sessionStorage.getItem("a_share")||0;
document.getElementById("a_share").innerHTML=count4;

const counter=(id,storage)=>{
    let count=0;
    if(storage=="local"){
        count=localStorage.getItem(id)||0;
    }
    else{
        count=sessionStorage.getItem(id)||0;
    }

    count++;
    document.getElementById(id).innerHTML=count;
    if(storage=="local"){
        localStorage.setItem(id,count)
    }
    else{
        sessionStorage.setItem(id,count)
    }
}

    document.getElementById("like").addEventListener("click",()=>{
        counter("a_like","local")
    })
    document.getElementById("comment").addEventListener("click",()=>{
        counter("a_comment","local")
    })
    document.getElementById("follow").addEventListener("click",()=>{
        counter("a_follow","local")
    })
    document.getElementById("share").addEventListener("click",()=>{
        counter("a_share","session")
    })



    