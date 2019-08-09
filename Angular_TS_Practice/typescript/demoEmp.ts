var empId;
var empName;
var emptype;
var isEmployee;
empId=123;
empName="Rohit";
emptype="Contract";
isEmployee=true;

console.log("Id"+empId);
console.log("Name"+empName);
console.log("Type of Employee"+emptype);
console.log("Is Employee ?"+isEmployee);

var myArray=[10,20,30];
var myCollection=["java",20,39.7,true];

console.log("myArray: "+myArray);
console.log("myCollection: "+myCollection);

var n1=10;
function myFunction(){
    var n2=20;
    if(n2>n1){
        //let n3=30;
        var n3=30;
    }
    console.log(n1+" "+n2+" "+n3);
}
myFunction();
//console.log(n1+" "+n2+" "+n3);
