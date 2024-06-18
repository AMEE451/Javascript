
// const divide = (a, b) => {
//     if (a == 0) {
//         throw new Error("error");
//     }
//     if (b == 0) {
//         throw new Error("error");
//     }
//     return a / b
// }
// // divide(10,2)
// console.log(divide(200, 0));




const divide2 = (a, b) => {
    if (a == 0) {
        throw new Error("error");
    }
    if (b == 0) {
        throw new Error("error");
    }
    return a / b
}

console.log("Start");

try {
    console.log(divide2(10, 0));
}
catch (e) {
    console.log("chku",e);
}

console.log("End");