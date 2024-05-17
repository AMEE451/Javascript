let distance=process.argv[2]
let time=process.argv[3]

let Speed=distance/time

if(Speed>40){
    console.log("Apply Brake");
}
else{
    console.log("Keep going");
}   