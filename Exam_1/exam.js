
let employees = []

let Totalemp = 0;
let Totalsalary = 0;

const fire = (index) => {
    employees.splice(index, 1);

    Totalemp = 0;
    document.getElementById("totalemp").innerHTML = `Total Employees : ${Totalemp}`
    Totalsalary = 0;
    document.getElementById("totalsalary").innerHTML = `Total Salary : ${Totalsalary}`;
    uimaker()
}
const uimaker = () => {

    document.getElementById("tbody").innerHTML = ""

    employees.map((ele, i) => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = ele.name
        let td2 = document.createElement("td")
        td2.innerHTML = ele.job
        let td3 = document.createElement("td")
        td3.innerHTML = ele.department
        let td4 = document.createElement("td")
        td4.innerHTML = ele.salary
        let td5 = document.createElement("td")
        td5.innerHTML = ele.experience
        let td6 = document.createElement("td")
        td6.innerHTML = ele.contact
    

        let td7 = document.createElement('td')
        if (ele.experience > 5) {
            td7.innerHTML = "senior"
        }
        else {
            td7.innerHTML = "Junior"
        }


        let btn1 = document.createElement("button");
        btn1.innerHTML = "Delete";

        btn1.setAttribute("class", "btn1")

        let td8 = document.createElement("td");
        td8.append(btn1);

        btn1.addEventListener("click", () => fire(i));

        // td8.setAttribute("id", "tdata");

        tr.append(td1, td2, td3, td4, td5, td6, td7,td8)

        document.getElementById("tbody").append(tr);

        Totalemp++;
        document.getElementById("totalemp").innerHTML = `Total Employees : ${Totalemp}`

        Totalsalary += parseFloat(ele.salary);
        document.getElementById("totalsalary").innerHTML = `Total Salary : ${Totalsalary}`;
    });

    Totalemp = 0;
    Totalsalary = 0;

}


const handledata = (e) => {
    e.preventDefault();

    let emp = {
        name: document.getElementById("name").value,
        job: document.getElementById("job").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value,
        experience: document.getElementById("experience").value,
        contact: document.getElementById("contact").value
    }

    employees.push(emp);
    uimaker();

}
    

document.getElementById("data").addEventListener("submit", handledata);

document.getElementById("deleteall").addEventListener("click", () => {
    document.getElementById("tbody").innerHTML = ""
    employees = []

    Totalemp = 0;
    document.getElementById("totalemp").innerHTML = `Total Employees : ${Totalemp}`
    Totalsalary = 0;
    document.getElementById("totalsalary").innerHTML = `Total Salary : ${Totalsalary}`;

})