

let arr=[1,2,3,4,5]
let max=0;
let n=arr.length
for(let i=0;i<n;i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
console.log(max);