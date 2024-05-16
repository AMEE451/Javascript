
let users = []

const handleData = (index) => {
    users.splice(index, 1)
    uimaker()
}

const uimaker = () => {
    document.getElementById("tbody").innerhtml = ""
    users.map((ele, i) => {

        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = ele.email

        let td2 = document.createElement('td')
        td2.innerHTML = ele.password

        let td3 = document.createElement('td')
        td3.innerHTML = ele.number

        let td4 = document.createElement('td')
        td4.innerHTML = "delete"

        td4.addEventListener("click", () => handleData(i))
        tr.append(td1, td2, td3, td4)

        document.getElementById("tbody").append(tr)
    })
}



const handledata = (e) => {
    e.preventDefault();

    let data = {
        name: document.getElementById("email").value,
        email: document.getElementById("password").value,
        number: document.getElementById("number").value,
    }
    console.log("test", data);
    // console.log("qsds");
    users.push(data)
    uimaker()

}

document.getElementById("data").addEventListener("submit", handledata)

document.getElementById("deleteall").addEventListener("click", () => {
    document.getElementById("tbody").innerHTML = ""
    users = []
})