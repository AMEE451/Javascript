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


// let count1,count2,count3,count4;
// let count=localStorage.getItem(key,count)||0;
// document.getElementById(id).innerHTML=count;

// const local=(id,key,count)=>{
//     count++;
//     document.getElementById(id).innerHTML=count;
//     localStorage.setItem(key,count);
// }

// let countt=sessionStorage.getItem(key,count)||0;
// const session=(id,key,count)=>{
//     count++;
//     document.getElementById(id).innerHTML=countt;
//     sessionStorage.setItem(key,count);
// }
// const counter=(click,id,key,cnt,fun)=>{
//     document.getElementById(click).addEventListener("click",()=>{
//           local(count, id, key,cnt,fun);
//           session(count, id, key,cnt,fun)
//         });
// }
// counter("like","a_like","key1",count1,localStorage)
// counter("comment","a_comment","key2",count2,localStorage)
// counter("follow","a_follow","key3",count3,localStorage)
// counter("share","a_share","key4",count4,sessionStorage)