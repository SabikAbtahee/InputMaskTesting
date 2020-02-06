import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "test";
  testField;
  testField2;
  disableSelect = new FormControl(false);
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 

  onblur() {
    console.log(this.testField);
    console.log(typeof this.testField);
  }
  onblur2() {
    console.log(this.testField2);
    console.log(typeof this.testField2);
  }
}
