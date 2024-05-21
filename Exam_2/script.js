let data=[]

    const Delete=(index)=>{
        data.splice(index,1);
        uimaker();
    }

    const uimaker=()=>{

        document.getElementById("shop").innerHTML="";

        data.map((ele,i)=>{

            let img=document.createElement('img');
            img.src=ele.image;
            img.setAttribute("id","img")

            let title=document.createElement('h3');
            title.innerHTML=ele.title;
            title.setAttribute("class","title")

            let price=document.createElement('p');
            price.innerHTML=ele.price;
            price.setAttribute("class","price")
            
            let btn1=document.createElement('button');
            btn1.innerHTML="Buy";
            btn1.setAttribute("id","btn1");
            btn1.setAttribute("class","btn");

            let btn2=document.createElement('button');
            btn2.innerHTML="Delete";
            btn2.setAttribute("id","btn2");
            btn2.setAttribute("class","btn");

            let btndiv=document.createElement('div')
            btndiv.append(btn1,btn2);

            let maindiv=document.createElement('div')
            maindiv.setAttribute("id","box")

            maindiv.append(img,title,price,btndiv);
            
            btn1.addEventListener("click",()=>{
                alert("Cart added succesfully");
            });

            btn2.addEventListener("click",()=>Delete(i))

            document.getElementById("shop").append(maindiv)


        });

    }


    const handledata=(e)=>{
        e.preventDefault();

         let products={
            
            image:document.getElementById("image").value,
            title:document.getElementById("title").value,
            price:document.getElementById("price").value

        }
        // console.log(products);
        data.push(products);
        uimaker();
    }

    document.getElementById("cart").addEventListener("submit",handledata)

    

const countdownTime = 30 * 60; // 30 minutes(countdown time)
const now = new Date().getTime(); //current time
const endTime = now + countdownTime *1000; //endtime

 setInterval(() => {
  const remainingTime = endTime - new Date().getTime();

  const minutes = Math.floor(remainingTime / 1000 / 60);
  const seconds = Math.floor(remainingTime / 1000 % 60)+2;

  document.getElementById("time").innerHTML = (`Hurry Up! ${minutes}:${seconds}`);

  if (remainingTime <= 0) {
    clearInterval(interval);
    document.getElementById("time").innerHTML = "Time's up!";
  }
}, 1000);

    