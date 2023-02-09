// Create a student result application 
// 1.take student information
// 2.take marks for 3 subjects
// 3.find total marks
// 4.find grade and percentage 
// 5.display detials


class Stud_Reult_Application {
    private firstName: string;
    private lastName: string;
    private marks: number[];
    private total: number;
    private percentage: number;
    private grade: string;
  
    constructor(firstName: string, lastName: string, marks: number[]) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.marks = marks;
    }
  
    // To calculate total marks
    calculateTotal(): void {
      this.total = 0;
      for (let i = 0; i < this.marks.length; i++) {
        this.total += this.marks[i];
      }
    }
  
    // To calculate percentage
    calculatePercentage(): void {
      this.percentage = (this.total / (this.marks.length * 100)) * 100;
    }
  
    // To calculate grade
    calculateGrade(): void {
      if (this.percentage >= 80) {
        this.grade = "A+";
      } else if (this.percentage >= 70) {
        this.grade = "A";
      } else if (this.percentage >= 60) {
        this.grade = "B";
      } else if (this.percentage >= 50) {
        this.grade = "C";
      } else if (this.percentage >= 40) {
        this.grade = "D";
      } else {
        this.grade = "F";
      }
    }
  
    // To display details
    displayDetails(): void {
      console.log("Name:", this.firstName + " " + this.lastName);
      console.log("Marks:", this.marks);
      console.log("Total:", this.total);
      console.log("Percentage:", this.percentage);
      console.log("Grade:", this.grade);
    }
  }
  
  const student = new Stud_Reult_Application("John", "Doe", [85, 75, 95]);
  student.calculateTotal();
  student.calculatePercentage();
  student.calculateGrade();
  student.displayDetails();
  