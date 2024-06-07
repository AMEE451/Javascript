const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


let count=localStorage.getItem("likes")||0;
document.getElementById("a_like").innerHTML=count;

const counter=()=>{
    count++;
    document.getElementById("a_like").innerHTML=count;
    localStorage.setItem("likes",count)
}

document.getElementById("like").addEventListener("click",counter);




let count2=localStorage.getItem("comments")||0;
document.getElementById("a_comment").innerHTML=count2;

const counter2=()=>{
    count2++;
    document.getElementById("a_comment").innerHTML=count2;
    localStorage.setItem("comments",count2)
}

document.getElementById("comment").addEventListener("click",counter2);




let count3=localStorage.getItem("followers")||0;
document.getElementById("a_follow").innerHTML=count3;

const counter3=()=>{
    count3++;
    document.getElementById("a_follow").innerHTML=count3;
    localStorage.setItem("followers",count3)
}

document.getElementById("follow").addEventListener("click",counter3);



let count4=sessionStorage.getItem("share")||0;
document.getElementById("a_share").innerHTML=count4;

const counter4=()=>{
    count4++;
    document.getElementById("a_share").innerHTML=count4;
    sessionStorage.setItem("share",count4)
}

document.getElementById("share").addEventListener("click",counter4);


// let count1,count2,count3,count4=0;

// const Insta=(click,id,variable,fun,storage,key)=>{
//     document.getElementById("click").addEventListener("click",()=>{
//        
//     })
// }

// Insta("like","a_like",count1,local,localStorage,"key1");
// Insta("comment","a_comment",count2,local,localStorage,"key2");
// Insta("follow","a_follow",count3,local,localStorage,"key3");
// Insta("share","a_share",count4,local,localStorage,"key4");