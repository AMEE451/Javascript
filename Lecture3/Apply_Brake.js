let distance=process.argv[2]
let time=process.argv[3]

let speed=distance/time

if(speed>40){
    console.log("Apply Brake");
}
else{
    console.log("Keep going");
}