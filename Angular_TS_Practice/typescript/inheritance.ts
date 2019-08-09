class Employee
{
    empId:number;
    name:string;
    salary:number;
    static noOfEmployees:number=0;

    constructor(empId:number,name:string,salary:number)
    {
        this.empId=empId;
        this.name=name;
        this.salary=salary;
        Employee.noOfEmployees++;
    }
    display()
    {
        console.log(`Id: ${this.empId}\nName:${this.name}`);
        console.log("\nSalary:"+this.salary+"\nTotalCount:"+Employee.noOfEmployees);
    }
}

class Manager extends Employee{
    noOfReporties:number;
    constructor(empId:number,name:string,salary:number,noOfReporties:number){
        super(empId,name,salary);
        this.noOfReporties=noOfReporties;
    }
    display()
    {
        super.display();
        console.log("No.Of.Reporties : "+this.noOfReporties);
    }
}
var emp=new Employee(101,"rohit",25000);
emp.display();
var man=new Manager(102,"rahul",35000,5);
man.display();