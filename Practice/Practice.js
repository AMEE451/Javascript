let students=[];

const uimaker= ()=>{
    document.getElementById("studentlist").innerHTML=""

    students.map((ele)=>{
        let name=document.createElement("p");
        name.innerHTML=ele.name
        let grid=document.createElement("h1");
        grid.innerHTML=ele.grid
        let email=document.createElement("h5");
        email.innerHTML=ele.email
        document.getElementById("studentlist").append(name,grid,email);
    })
};

const handleData=(e)=>{
    e.preventDefault();
            
    let Student={
        name:document.getElementById("name").value,
        grid:document.getElementById("grid").value,
        email:document.getElementById("email").value,
    };
    students.push(Student);
    uimaker();
};

document.getElementById("studentdata").addEventListener("submit",handleData);
















let employee=[];
const Uimaker=()=>{
    document.getElementById("emplist").innerHTML="";

    employee.map((item)=>{

        let name=document.createElement("p");
        name.innerHTML=item.name
        let grid=document.createElement("p");
        grid.innerHTML=item.name
        let email=document.createElement("p");
        email.innerHTML=item.name

        document.getElementById("emplist").append(name,grid,email)
    })
    
};

const HandleData=(e)=>{
    e.preventDefault();

    let emp={

        name:document.getElementById("name").value,
        grid:document.getElementById("grid").value,
        email:document.getElementById("email").value,
    };
    employee.push(emp);
    uimaker();
};

document.getElementById("employee").addEventListener("submit",HandleData)




 






