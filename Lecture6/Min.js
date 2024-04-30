
let arr=[1,2,3,4,5]
let min=arr[0]
let n=arr.length
for(i=0;i<n;i++){
    if(min>arr[i]){
        min=arr[i]
    }
}
console.log(min);