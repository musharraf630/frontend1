// let b=document.getElementById("btn")
// b.addEventListener("click", ()=>{
//     let x=Number(prompt("enter the number"))
//     let y=Number(prompt("enter the number"))
//     alert(x+y)
// })
// let b=document.getElementById("btn")
// b.onclick=()=>{
//     let x=Number(prompt("enter the number"))
//     let y=Number(prompt("enter the number"))
//      alert(x+y)
// }
// let cd=document.getElementById("callbtn")
// cd.addEventListener("click",()=>{
// let date=new Date()
// alert(date)
// alert(date.toLocaleDateString())
// })
// let doublebtn=document.getElementById("double")
// doublebtn.addEventListener("dblclick",()=>{
//     let time=new Date
//     alert(time.toLocaleTimeString())
// })
// let conmsg=document.getElementById("conf-msg")
// let field=document.getElementById("form-field")
// field.addEventListener("focus",()=>{
//     field.style.cssText="background-color:yellow;border:blue 2px solid;outline:none"
//     conmsg.style.display="inline"
// })
// field.addEventListener("blur",()=>{
//     field.style.cssText="background-color:white;border:black 2px solid;outline:none"
//     conmsg.style.display="none"
// })
// let h1=document.getElementById("heading")
// h1.addEventListener("mouseover",()=>
// {
//     h1.style.display="none"
// })
// h1.addEventListener("mouseout",()=>
// {
//     h1.style.display="block"
// })
let dataElement=document.getElementById("data")
let input=document.getElementById("something")
input.addEventListener("keyup",(e)=>{
    dataElement.innerHTML=`<b>${e.target.value}</b>`
})
let element=document.querySelector("form")
element.addEventListener("submit",(e)=>{
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    console.log(e.target.username.value);
    console.log(e.target.emailid.value);
    element.reset()
    e.preventDefault()

})