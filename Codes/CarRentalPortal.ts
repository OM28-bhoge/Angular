interface car {
    name: string;
    mbno: string;
    cname: string;
    cmodel: number;
    cno: string;
    calculateRent(): void;
    calculateDiscount(): void;
  }
  
  class CarRentalportal implements car {
    name: string;
    mbno: string;
    cname: string;
    cmodel: number;
    cno: string;
    hrs: number;
  
    constructor(
      name: string,
      mbno: string,
      cname: string,
      cmodel: number,
      cno: string,
      hrs: number
    ) {
      this.name = name;
      this.mbno = mbno;
      this.cname = cname;
      this.cmodel = cmodel;
      this.cno = cno;
      this.hrs = hrs;
    }
    
    calculateRent(): void {
      console.log("Car Rent " + this.hrs * 65);
    }
    
    calculateDiscount(): void {
      if (this.hrs > 5) {
        console.log("Discount on Rental Car :" + (this.hrs * 20) / 100);
      }
    }
    
    displayDetails(): void {
      console.log("User Name :" + this.name);
      console.log("User Mobile NO :" + this.mbno);
      console.log("Car Name :" + this.cname);
      console.log("Car Model :" + this.cmodel);
      console.log("Car NO :" + this.cno);
      this.calculateRent();
      this.calculateDiscount();
    }
  }
  const Mycar = new CarRentalportal("Om", "7798151164", "Audi", 2021, "MH12AU1929", 8);
  Mycar.displayDetails();