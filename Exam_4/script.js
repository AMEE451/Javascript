
class BankAccount {
    constructor(name, number,acc_no,amount) {
        this.name = name;
        this.number=number;
        this.acc_no = acc_no;
        this.amount=0;
    }

    setdata(name,number,acc_no){
      this.name=name;
      this.number=number;
      this.acc_no=acc_no;
    }

    getname(name){
      return this.name=name;
    }
    getnumber(number){
      return this.number=number;
    }
    getaccno(acc_no){
      return this.acc_no=acc_no;
    }

    deposit(money) {
        if (money > 0) {
            this.amount += Number(money);
            alert("Deposited Successfully")
        }
         else {
            alert("Enter Amount Greater Than Zero");
        }
    }

    #isvalid(amt) {
      if (amt > 0) {
          if (this.amount >= amt) {
              this.amount -= amt;
              document.getElementById("check").innerHTML = ac.getamount();
              alert("purchased successfully");
          } else {
              alert("please deposit money before");
          }
      } else {
          alert("Amount Must be Greater than zero");
      }
  }

  withdraw(amt) {
      if (this.#isvalid(amt)) {
          return true;
      } else {
          return false;
      }
  }
    
    getamount() {
        return this.amount;
    }
}

  let ac = new BankAccount()

  uimaker=()=>{
    document.getElementById("details").innerHTML = "";

      let p1 = document.createElement("p");
      p1.innerHTML = `Account Holder Name : ${ac.name}`
      p1.setAttribute("class","acname")
      
      let p2 = document.createElement("p");
      p2.innerHTML = `Mobile Number : ${ac.number}`
      p2.setAttribute("class","acno")

      let p3 = document.createElement("p");
      p3.innerHTML = `Account Number : ${ac.acc_no}`
      p3.setAttribute("class","acacno")

      // let p4=document.createElement("p")
      // p4.innerHTML=`${ac.amount}`
      // p4.setAttribute("class","btn")

      document.getElementById("details").append(p1,p2,p3);
  }

const handledata=(e)=>{
    e.preventDefault();

    let user={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        acc_no:document.getElementById("acc_no").value,
    }

    ac.setdata(user.name,user.acc_no,user.number);
    uimaker();

}

document.getElementById("data2").addEventListener("submit", (e) => {

  e.preventDefault();

  let depositt = document.getElementById("money").value

  ac.deposit(depositt);

  document.getElementById("money").innerHTML = "";

})

document.getElementById("check").addEventListener("click", () => {
      document.getElementById("details").append( `Balance : ${ac.getamount()}`);

})
  
document.getElementById("data").addEventListener("submit",handledata)


let Products = [
  {
    title: "glass",
    price: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cOxag7yoMvR-a_qIEAXPmEVcnEUCSTKWFg&s"
    
  },
  {
    title: "cup",
    price: 80,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXH1Kx3HhiRYf5cG5zew8IX7DCSDQFW3QcVg&s"
  },
  {
    title: "lamp",
    price: 150,
    image: "https://imgshopimages.lbb.in/catalog/product/u/s/uss015_1__1.jpg",
  },
  {
    title: "puzzle",
    price: 120,
    image: "https://m.media-amazon.com/images/I/71rJwGG3jDL.jpg",
  },
];


Products.map((ele)=>{

  let image = document.createElement("img");
  image.src = ele.image;
  image.setAttribute("class","img")

  let h2 = document.createElement("h2");
  h2.innerHTML =  ele.title;
  h2.setAttribute("class","title")

  let h5 = document.createElement("h5");
  h5.innerHTML = ele.price
  h5.setAttribute("class","price")

  let btn = document.createElement("button");
  btn.innerHTML = "Buy";
  btn.setAttribute("class","buy")

  btn.addEventListener("click",()=>{
      ac.withdraw(ele.price);
  })
  
  let div = document.createElement("div")
  div.append(image,h2,h5,btn)
  div.setAttribute("class","div")

  document.getElementById("cart").append(div)
})