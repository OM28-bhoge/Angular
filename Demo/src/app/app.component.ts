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
}