

const handledata=(e)=>{
    e.preventDefault();
    
    let user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        image:document.getElementById("image").value,
        country:document.getElementById("country").value,
        pswd:document.getElementById("pswd").value,
    }
    localStorage.setItem("data",JSON.stringify(user))
    window.location.href="/Exam_5/index.html"
}
document.getElementById("add").addEventListener("submit",handledata)
