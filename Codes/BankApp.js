// interface BankApp {
//     number: number;
//     holderName: string;
//     type?: string;
//     balance: number;
//     withdraw(): void;
//     deposit(): void;
//     displayDetais(): void;
// }
var BankApp = /** @class */ (function () {
    function BankApp() {
        this.employees = [];
    }
    BankApp.prototype.addEmployee = function (id, name, salary) {
        var employee = { id: id, name: name, salary: salary };
        this.employees.push(employee);
    };
    BankApp.prototype.calculateBonus = function (employeeId, bonusPercentage) {
        var employee = this.employees.find(function (e) { return e.id === employeeId; });
        if (!employee) {
            throw new Error("Employee with ID ".concat(employeeId, " not found."));
        }
        return employee.salary * (bonusPercentage / 100);
    };
    BankApp.prototype.calculateNetSalary = function (employeeId) {
        var employee = this.employees.find(function (e) { return e.id === employeeId; });
        if (!employee) {
            throw new Error("Employee with ID ".concat(employeeId, " not found."));
        }
        return employee.salary - this.calculateBonus(employeeId, 10);
    };
    BankApp.prototype.displayEmployeeDetails = function (employeeId) {
        var employee = this.employees.find(function (e) { return e.id === employeeId; });
        if (!employee) {
            throw new Error("Employee with ID ".concat(employeeId, " not found."));
        }
        console.log("ID: ".concat(employee.id, ", Name: ").concat(employee.name, ", Salary: ").concat(employee.salary));
    };
    return BankApp;
}());
var employeePortal1 = new BankApp();
employeePortal1.addEmployee(1, 'John Doe', 5000);
employeePortal1.addEmployee(2, 'Jane Smith', 6000);
console.log(employeePortal1.calculateBonus(1, 5)); // Output: 250
console.log(employeePortal1.calculateNetSalary(1)); // Output: 4750
employeePortal1.displayEmployeeDetails(2); // Output: ID: 2, Name: Jane Smith, Salary: 6000
