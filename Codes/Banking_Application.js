// Create a banking application 
// 2.deposit amount
// 3.display current balance
// 4.display account details 
// in typescripts 
var Banking_Application = /** @class */ (function () {
    function Banking_Application(number, holderName, type, balance) {
        this.number = number;
        this.holderName = holderName;
        this.type = type;
        this.balance = balance;
    }
    Banking_Application.prototype.withdraw = function (amount) {
        this.balance = this.balance - amount;
        console.log("Current balance: ".concat(this.balance));
    };
    Banking_Application.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
        console.log("Current balance: ".concat(this.balance));
    };
    Banking_Application.prototype.displayDetails = function () {
        console.log("Account number: ".concat(this.number));
        console.log("Account holder name: ".concat(this.holderName));
        console.log("Account type: ".concat(this.type));
        console.log("Current balance: ".concat(this.balance));
    };
    return Banking_Application;
}());
var johnDoeAccount = new Banking_Application(123, 'John Doe', 'Savings', 2000);
johnDoeAccount.displayDetails();
