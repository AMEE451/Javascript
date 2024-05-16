
const getvalue=()=>{
    let num=document.getElementById("num").value;

    document.getElementById("result").innerHTML=multiply(num);
}

const multiply=(num)=>{

    return num*50;
}