import { Quiz } from "./api/api.js";

let arr = await Quiz.Get()
console.log(arr);

const uimaker = () => {
    let count=0;
    arr.map((ele) => {
        let que = document.createElement("p")
        que.innerHTML = ele.question;
        let options1 = document.createElement("button")
        options1.innerHTML = ele.options.A; 
        let options2 = document.createElement("button")
        options2.innerHTML = ele.options.B;
        let options3 = document.createElement("button")
        options3.innerHTML = ele.options.C;
        let options4 = document.createElement("button")
        options4.innerHTML = ele.options.D;

        const answer = (ans) => {
            return()=>{
                options.forEach(option => option.disabled = true);
            if (ans.innerHTML === ele.correct) {
                ans.style.backgroundColor = "rgb(106, 216, 132)";
                count++;
            }
            else {
                ans.style.backgroundColor = "rgb(248, 113, 113)";
            }
           
            document.getElementById("total").innerHTML=`Total Marks:${count}/18`
        }
    }
   
    let options = [options1, options2, options3, options4];
    

        options1.addEventListener("click", answer(options1,options))
        options2.addEventListener("click", answer(options2,options))
        options3.addEventListener("click", answer(options3,options))
        options4.addEventListener("click", answer(options4,options))

        document.getElementById("quiz").append(que, options1, options2, options3, options4)
    })

}

const handledata=(e)=>{
    e.preventDefault();
  
      let New={
        question:document.getElementById("add").value,
        options:{
        A:document.getElementById("optA").value,
        B:document.getElementById("optB").value,
        C:document.getElementById("optC").value,
        D:document.getElementById("optD").value,
        },
        correct:document.getElementById("ans").value
        
      }
      Quiz.post(New);
  } 
document.querySelector("#form").addEventListener("submit", handledata)



document.getElementById('start').addEventListener('click', function() {
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {

            var video = document.getElementById('cameraStream');
            video.srcObject = stream;
            video.play();
        })
        .catch(function(error) {
            console.error("Error accessing the camera: ", error);
        });
    } else {
        alert("getUserMedia is not supported in this browser.");
    }
});


document.getElementById("start").addEventListener("click",()=>{

    let min=29;
    let sec=59;

    let id=setInterval(() => {
         
        document.getElementById("time").innerHTML=(`Time : ${min}:${sec}`)
        sec=sec-1

        if(min==0 && sec==0){
            document.getElementById("time").innerHTML=(`${min}:${sec}`)
            document.getElementById("time").innerHTML=("Time Up")
            clearInterval(id)
        }
        if(sec==0){
            min=min-1
            sec=59
        }

    },1000);

    uimaker()

})

// document.querySelector("body").addEventListener('contextmenu',function(e){
//     e.preventDefault();
// })

