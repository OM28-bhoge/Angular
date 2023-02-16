// Create a employee portal application using interfaces and class  
// 1. Enter employee details
// 2.calculate bonus
// 3.find net salary
// 4.display employee details
// in TypeScript

// interface Employee {
//     id: number;
//     name: string;
//     salary: number;
// }

// class Emp_Portal_Application {
//     employees: Employee[] = [];

//     addEmployee(id: number, name: string, salary: number) {
//         const employee: Employee = { id, name, salary };
//         this.employees.push(employee);
//     }

//     calculatebonus(employeeId: number, bonusPercentage: number): void {

//     }

//     calculateNetSalary(employeeId: number): void {

//     }

//     displayEmployeeDetails(employeeId: number): void {

//         const employee =  this.employees.forEach(emp => {
//             if (emp.id === employeeId) {
//                 console.log(`ID: ${emp.id}, Name: ${emp.name}, Salary: ${emp.salary}`);
//             }else{
                

//             }

//         })

//         console.log(employee);
        
//     }

// }

// const employeePortal = new Emp_Portal_Application();
// employeePortal.addEmployee(1, 'Om Bhoge', 90000);
// employeePortal.addEmployee(2, 'Ash Ley', 100000);

// employeePortal.displayEmployeeDetails(2);   



console.log("Employee Management");
interface Employee{
    eno: number;
    ename: string;
    salary: number;
    calbonus(): void;
    calnetsal(): void;
    displaydet(): void;
    noofdays:number;

}
class Emp_Portal_Application implements Employee{
    eno: number;
    ename: string;
    salary: number;
    noofdays: number=0;
    extradays:number=0;
    Bonus: number=0;
    netsal: number=0;
    isPermanent: boolean;
    constructor(eno: number, ename: string, noofdays: number, extradays: number, isPermanent:boolean){
        this.eno= eno;
        this.ename= ename;
        this.noofdays= noofdays;
        this.extradays= extradays;
        this.isPermanent= isPermanent;
         this.Bonus= 100*this.extradays;
         this.netsal= (this.noofdays*150) +this.Bonus;
    }
    
    calbonus(): void {
       
        console.log(`The Bonus earned by ${this.ename} is ${this.Bonus}`)
    }
    calnetsal(): void {
        
    }
    displaydet(): void {
        console.log(`Employee ${this.ename} having employee number ${this.eno} has worked for 
        ${this.noofdays} and ${this.extradays} days extra so his bonus is ${this.Bonus} and his net salary is ${this.netsal}. ` )
    }
    

}
const rahul= new Emp_Portal_Application(1,"Om Bhoge",28,1,true);
const Radha= new Emp_Portal_Application(2,"Ash Ley",23,4, false);
const ravi= new Emp_Portal_Application(3,"Ninad Pagare",34,8, true);
rahul.calbonus();
Radha.calbonus();
rahul.displaydet();