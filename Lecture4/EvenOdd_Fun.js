
const getvalue=()=>{
    
    let num=document.getElementById("num").value;
    Evenodd(num)
    console.log(num);
}

const Evenodd=(num)=>{
    // console.log(num);
    if(num%2==0)
    {
        document.getElementById("result").innerHTML="It's an Even Number";
    }
    else
    {
        document.getElementById("result").innerHTML="It's an Odd Number";
    }
}