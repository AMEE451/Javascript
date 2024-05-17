let Distance=process.argv[2]
let Time=process.argv[3]

let Speed=Distance/Time

if(Speed>40){
    console.log("Apply Brake");
}
else{
    console.log("Keep going");
}   