// Create a employee portal application using interfaces and class  
// 1. Enter employee details
// 2.calculate bonus
// 3.find net salary
// 4.display employee details
// in TypeScript

interface Employee {
    id: number;
    name: string;
    salary: number;
}

class Emp_Portal_Application {
    employees: Employee[] = [];

    addEmployee(id: number, name: string, salary: number) {
        const employee: Employee = { id, name, salary };
        this.employees.push(employee);
    }

    calculatebonus(employeeId: number, bonusPercentage: number): void {

    }

    calculateNetSalary(employeeId: number): void {

    }

    displayEmployeeDetails(employeeId: number): void {

        const employee =  this.employees.forEach(emp => {
            if (emp.id === employeeId) {
                console.log(`ID: ${emp.id}, Name: ${emp.name}, Salary: ${emp.salary}`);
            }else{
                

            }

        })

        console.log(employee);
        
    }

}

const employeePortal = new Emp_Portal_Application();
employeePortal.addEmployee(1, 'Om Bhoge', 90000);
employeePortal.addEmployee(2, 'Ash Ley', 100000);

employeePortal.displayEmployeeDetails(2);   