let num1=process.argv[2]
let num2=process.argv[3]

if(num1>num2){
    console.log("Number 1 is largest");
}
else if(num2>num1){
    console.log("Number 2 is largest");
}
else{
    console.log("Both are equal");
}