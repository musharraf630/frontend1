// let student={
//     name:"smith",
//     id:11123,
//     age:21,
//     myname:function(){
//         return "my name is"+this.name
//     }
// }
// console.log(student.id);
// console.log(student.myname());
// console.log(typeof student);
class P{
    constructor(firstname,lastname,age){
        this.firstname=firstname 
        this.lastname=lastname
        this.age=age
    }
    fullname(){
        return this.firstname+" "+this.lastname
    }
}
let p1=new P("Allen","Smith",21)
console.log(p1);
console.log(p1.fullname());
let p2=new P("John","Wick",32)
console.log(p2);
console.log(p2.fullname());
function Chair(color,material,weight){
    this.color=color
    this.material=material
    this.weight=weight
    this.action=function(){
        return "material is"+this.material
    }
}
let x=new Chair("green","plastic",345)
console.log(x);
console.log(x.color);
console.log(x.action());
console.log(x.weight);
let ob=new Object()
console.log(ob);
ob.name="musharraf"
ob.age=23
ob.fu=function(){
    return "hello world"
}
console.log(ob);
console.log(ob.name);
console.log(ob.fu());