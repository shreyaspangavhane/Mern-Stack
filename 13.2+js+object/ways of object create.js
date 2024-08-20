//using like as function
var housekeeper1 = {
    yrsOfExp:12,
    name:"Joe",
}

//or

//using constructor function
function housekeeper1(name,yrsOfExp){
    this.name=name;
    this.yrsOfExp=yrsOfExp;

}
var housekeeper1=new Housekeeper("Joe",12);
console.log(housekeeper1.name);
var housekeeper2=new Housekeeper("Ram",15);
