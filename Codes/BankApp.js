var Bank = /** @class */ (function () {
    function Bank(number, holderName, balance) {
        this.number = number;
        this.holderName = holderName;
        this.balance = balance;
    }
    Bank.prototype.withdraw = function () {
        throw new Error("Method not implemented.");
    };
    Bank.prototype.deposit = function () {
        throw new Error("Method not implemented.");
    };
    Bank.prototype.displayDetais = function () {
        throw new Error("Method not implemented.");
    };
    return Bank;
}());
