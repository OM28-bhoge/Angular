// Create a employee portal application using interfaces and class  
// 1. Enter employee details
// 2.calculate bonus
// 3.find net salary
// 4.display employee details
// in TypeScript
var Emp_Portal_Application = /** @class */ (function () {
    function Emp_Portal_Application() {
        this.employees = [];
    }
    Emp_Portal_Application.prototype.addEmployee = function (id, name, salary) {
        var employee = { id: id, name: name, salary: salary };
        this.employees.push(employee);
    };
    Emp_Portal_Application.prototype.calculatebonus = function (employeeId, bonusPercentage) {
    };
    Emp_Portal_Application.prototype.calculateNetSalary = function (employeeId) {
    };
    Emp_Portal_Application.prototype.displayEmployeeDetails = function (employeeId) {
        //     const employee = this.employee((e) => e.id === employeeId);
        //           if (!employee) {
        //             throw new Error(`Employee with ID ${employeeId} not found.`);
        //           }
        //           console.log(`ID: ${employee.id}, Name: ${employee.name}, Salary: ${employee.salary}`);
        var employee = this.employees.forEach(function (emp) {
            if (emp.id === employeeId) {
                console.log("ID: ".concat(emp.id, ", Name: ").concat(emp.name, ", Salary: ").concat(emp.salary));
            }
            else {
                // throw new Error(`Employee with ID ${employeeId} not found.`);
            }
        });
        // const e = this.employees.find(emp => emp.id === employeeId);
        console.log(employee);
    };
    return Emp_Portal_Application;
}());
var employeePortal = new Emp_Portal_Application();
employeePortal.addEmployee(1, 'Om Bhoge', 90000);
employeePortal.addEmployee(2, 'Ash Ley', 100000);
employeePortal.displayEmployeeDetails(2);
