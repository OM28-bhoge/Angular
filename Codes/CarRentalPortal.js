var CarRentalportal = /** @class */ (function () {
    function CarRentalportal(name, mbno, cname, cmodel, cno, hrs) {
        this.name = name;
        this.mbno = mbno;
        this.cname = cname;
        this.cmodel = cmodel;
        this.cno = cno;
        this.hrs = hrs;
    }
    CarRentalportal.prototype.calculateRent = function () {
        console.log("Car Rent " + this.hrs * 65);
    };
    CarRentalportal.prototype.calculateDiscount = function () {
        if (this.hrs > 5) {
            console.log("Discount on Rental Car :" + (this.hrs * 20) / 100);
        }
    };
    CarRentalportal.prototype.displayDetails = function () {
        console.log("User Name :" + this.name);
        console.log("User Mobile NO :" + this.mbno);
        console.log("Car Name :" + this.cname);
        console.log("Car Model :" + this.cmodel);
        console.log("Car NO :" + this.cno);
        this.calculateRent();
        this.calculateDiscount();
    };
    return CarRentalportal;
}());
var Mycar = new CarRentalportal("Om", "7798151164", "Audi", 2021, "MH12AU1929", 8);
Mycar.displayDetails();
