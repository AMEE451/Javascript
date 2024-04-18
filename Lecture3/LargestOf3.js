let A=process.argv[2]
let B=process.argv[3]
let C=process.argv[4]

if((A>B)&&(A>C)){
    console.log("A is largest");
}
else if(B>C){
    console.log("B is largest");
}
else{
    console.log("C is largest");
}