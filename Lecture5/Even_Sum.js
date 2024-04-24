
const Getvalue=()=>{
    let num=document.getElementById("num").value;

    let ans=sum(num);

    document.getElementById("result").innerHTML=ans;
}

const sum=(num)=>{
    let i,sum=0;
    for(i=1;i<=num;i++)
    {
        if(i%2==0)
        {
            sum=sum+i;
        }
    }

    return sum;
}