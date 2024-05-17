
let Arr = ["RED", "AND", "WHITE"];

const alter = (Arr) => {
    for (let i = 0; i < Arr.length; i++) {
        if (i % 2 == 0) {
            console.log(Arr[i]);
        }
        else {
            console.log(Arr[i].toLowerCase());
        }
    }
}
alter(Arr)
