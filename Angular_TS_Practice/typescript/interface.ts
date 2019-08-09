interface Customer{
    name:String;
    age:number;
    phone:number;
}
let customers:Customer[]=[];
customers[0]={name:'rohit',age:22,phone:9078827326};
customers.push({name:'rahul',age:25,phone:9066627326})

for(let c of customers){
    console.log(c);
}