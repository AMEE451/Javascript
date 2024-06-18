

const Timer=(min)=>{

    let id=setInterval(() => {
        


    }, 1000);
}

const handledata=(e)=>{
    e.preventDefault();
    
      let min=document.querySelector("#min").value
  
    Timer(min);
}

document.getElementById("data").addEventListener("submit",handledata);11