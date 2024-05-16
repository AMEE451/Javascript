
const getvalue=()=>{
    
    let num=document.getElementById("num").value;

    document.getElementById("result").innerHTML=square(num);

}

const square=(num)=>{

    return num*num;
}