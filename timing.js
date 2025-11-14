console.log("start");
function call(){
    console.log("calling");
}
setTimeout(call , 5000)
console.log("end");
let c=0;
let x=setInterval(() => {
    console.log(c++);
}, 1000);