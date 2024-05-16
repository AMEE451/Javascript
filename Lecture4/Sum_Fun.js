
const getvalue=()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let num3=document.getElementById("num3").value;

    let answer=sum(num1,num2,num3);

    document.getElementById("result").innerHTML=answer;
}


const sum=(num1,num2,num3)=>{
    
   let ans=Number(num1)+Number(num2)+Number(num3);

   return ans;
}