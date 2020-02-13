import { Component, OnInit, OnChanges } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "test";
  testField = 555555.4444;
  testField2;
  public customPatterns = {
    "0": {
      pattern: new RegExp("[a-zA-Z]")
    }
  };
  disableSelect = new FormControl(false);
  toppings = new FormControl();
  insureForm: FormGroup;
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato"
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  onblur() {
    console.log(this.testField);
    console.log(typeof this.testField);
  }
  onblur2() {
    console.log(this.testField2);
    console.log(typeof this.testField2);
  }

  initForm() {
    this.insureForm = this.fb.group({
      PremiumAmount: [
        555.6666
        // [Validators.required, Validators.min(0), Validators.max(999999)]
      ]
    });

    // setInterval(() => {
    //   console.log(this.insureForm.value.PremiumAmount);
    //   console.log(typeof this.insureForm.value.PremiumAmount);
    // }, 3000);
  }

  // omit_special_char(event) {
  //   var k;
  //   k = event.charCode; //         k = event.keyCode;  (Both can be used)
  //   console.log(k);
  //   return (k==44 || (k>=48 && k<=57));
  // }
}
