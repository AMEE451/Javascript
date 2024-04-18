let Australia=process.argv[2]
let England=process.argv[3]

if (Australia > England){
    console.log("Australia");
}
else if(Australia < England){
    console.log("England");
}
else{
    console.log("Tie");
}