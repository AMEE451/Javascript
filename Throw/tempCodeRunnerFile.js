 {
    if (a == 0) {
        throw new Error("error");
    }
    if(b==0){
        throw new Error("error");
    }
    return a / b
}

console.log("Start");

try {
    console.log(divide2(10, 0));
}
catch (e) {
    console.log(e);
}

console.log("End");