let num1=process.argv[2]
let num2=process.argv[3]
let num3=process.argv[4]

if(num1>num2){
    console.log("True");
}
else{
    console.log("False");
}

num1+=num3
console.log(num1);
if(num1>num2){
    console.log("True");
}
else{
    console.log("False");
}

