import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MyfirstAngularApp';
  a1="TestCode";

  getData() 
  {
    return "Value from Method";
  }

  val = "Value from this keyword";
  getData1()
  {
    return this.val;
  }

  obj={name:"Om",age:"22"};

  a=500;
  b=200;

  currentURL=window.location.href;

  GetYTChannel()
  {
    alert("My Alert");
  }

  str="Get String Value";
  GetValue()
  {
    alert(this.str);
  }

  GetValuebyParam(name:any)
  {
    alert(name);
  }

  strName = '' ;
  GetValue1(val:any)
  {
    console.warn(val);
    this.strName = val ;
  }

  number1 :any = 0;
  number2 :any = 0;
  sum = 0;
  
  calc(num1:any,num2:any)
  {
    this.sum = parseFloat(num1) + parseFloat(num2);
  }
  
  EventHandling(val:any)
  {
    alert(val);
    console.warn(val)
  }

  EventHandling1(val:any)
  {
    alert(val);
    console.warn(val)
  }

  EventHandling2(val:any)
  {
    alert(val);
  }

  EventHandling3(val:any)
  {
    alert(val);
  }

  EventHandling4(val:any)
  {
    alert(val);
  }

  EventHandling5(val:any)
  {
    alert(val);
  }
  
  EventHandling6(val:any)
  {
    alert(val);
  }
}