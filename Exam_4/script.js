


class BankAccount {
    constructor(name, number,acc_no,amount) {
        this.name = name;
        this.number=number;
        this.acc_no = acc_no;
        this.amount=0;
    }

    setAccName(name) {
        this.AccName = name;
      }
      getAccName(name) {
        return (this.name = name);
      }
    
      setAccNo(acc_no) {
        this.acc_no = acc_no;
      }
      getAccNo(acc_no) {
        return (this.acc_no = acc_no);
      }

      setNumber(number) {
        this.number = number;
      }
      getnumber(number) {
        return (this.number = number);
      }

    setdeposit(money) {
        if (money > 0) {
            this.amount += Number(money);
            alert("Deposite Successfully")
        }
         else {
            alert("Enter Amount Greater Than Zero");
        }
    }

    getdeposit(){
        return this.amount
    }

    setWithdraw(money){
              if(this.amount > 0){
                  this.amount -= Number(money)
                  alert("order SuccessFully..")
              }else{
                  alert("Please Deposite ")
              }
             
            }
            getWithdraw(cash){
               this.amount ;
            }
    
    getwithdraw() {
        return this.amount;
    }
}

    let ac = new BankAccount("name", 0, 0, 0, 0)

    const uimaker = () => {
        document.getElementById("details").innerHTML = "";
        let p1 = document.createElement("p");
        p1.innerHTML = `AccountName : ${ac.name}`;
      
        let p2 = document.createElement("p");
        p2.innerHTML = `Account No : ${ac.acc_no}`;
      
        let p3 = document.createElement("p");
        p3.innerHTML = `Mobile No : ${ac.number}`;
      
        let p4 = document.createElement("p");
        p4.innerHTML = `Balance : ${ac.amount}`;
      
        document.getElementById("details").append(p1, p2, p3, p4);
      };


const handledata=(e)=>{
    e.preventDefault();

    let user={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        acc_no:document.getElementById("acc_no").value,
    }

    ac.setAccName(user.name);
    ac.setAccNo(user.acc_no);
    ac.setNumber(user.number);
  
    // console.log(ac);
    uimaker();

}

document.getElementById("deposit").addEventListener("click", (e) => {

    e.preventDefault();
    let pay = document.getElementById("money").value
    ac.setdeposit(money);
})

document.getElementById("check").addEventListener("click", (e) => {
          e.preventDefault();
      
        document.getElementById("details").innerHTML = "";
        let p1 = document.createElement("p");
        p1.innerHTML = `Account Name :${ac.name}`;
      
        let p2 = document.createElement("p");
        p1.innerHTML = `Account No : ${ac.acc_no}`
      
        let p3 = document.createElement("p");
        p3.innerHTML = `Mobile No : ${ac.number}`;
      
        let p4 = document.createElement("p");
        p4.innerHTML =` Balance : ${ac.amount}`;
      
        document.getElementById("details").append(p1, p2, p3, p4);
      });

document.getElementById("data").addEventListener("submit",handledata)

