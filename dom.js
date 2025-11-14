let x= document.getElementById("sample")
console.log(x.html);
console.log(x.innerText);
function changeContent(){
    x.innerText="hello galaxy"
}
function changeStyle(){
    x.style.cssText="color:green;font-style:italic"
}
x.setAttribute("tittle","Java is awesome")
function darkMode(){
    let togglebtn=document.getElementById("togglebtn")
    let bodyElement=document.querySelector("body")
    bodyElement.classList.toggle("dark")
    if(bodyElement.classList.contains("dark"))
    togglebtn.innerText="lightmode"
    else
    togglebtn.innerText="darkmode"

}