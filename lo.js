
let x=document.getElementsById("g1")
function fa(){
    
    for(let i=0;i<=5;i++)
{
    for(let j=0;j<=6;j++)
    {
        if(i-j==2||i+j==8||i==0&&j%3!=0||i==1&&j%3==0)
        document.write("*"+"&nbsp"+"&nbsp"+"&nbsp")
        else
        document.write("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp")
    }
  
    document.write("<br>")
}
}