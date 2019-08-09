var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empId, name, salary) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
        Employee.noOfEmployees++;
    }
    Employee.prototype.display = function () {
        console.log("Id: " + this.empId + "\nName:" + this.name);
        console.log("\nSalary:" + this.salary + "\nTotalCount:" + Employee.noOfEmployees);
    };
    Employee.noOfEmployees = 0;
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empId, name, salary, noOfReporties) {
        var _this = _super.call(this, empId, name, salary) || this;
        _this.noOfReporties = noOfReporties;
        return _this;
    }
    Manager.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("No.Of.Reporties : " + this.noOfReporties);
    };
    return Manager;
}(Employee));
var emp = new Employee(101, "rohit", 25000);
emp.display();
var man = new Manager(102, "rahul", 35000, 5);
man.display();
