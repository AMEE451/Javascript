
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbzQs4J--g83X21YYdLT8r26xo_PTySBlW82301ZEthB8Ns0EpMOrrLgT6xfGerui4KE6Q/exec',{
        method:"POST",
        body:data
    })
    .then(res=>res.text())
     document.getElementById("alert").value=data;
        alert("Your Form is Submitted Succesfully")
})