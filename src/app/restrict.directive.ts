import { Directive, ElementRef, Input, HostListener } from "@angular/core";
import * as Inputmask from "inputmask";
@Directive({
  selector: "[restrict]"
})
export class RestrictDirective {
  constructor(private el: ElementRef) {
    
  }

  // map of some of the regex strings I'm using (TODO: add your own)
  private regexMap = {
    integer: "^[0-9]*$",
    float: "^[+-]?([0-9]*[.])?[0-9]+$",
    words: "([A-z]*\\s)*",
    point25: "^-?[0-9]*(?:\\.25|\\.50|\\.75|)$",
    custom: "[0-9][0-9]*,?[0-9]*"
  };

//   @Input("restrict")
//   public set defineInputType(type: string) {
//     Inputmask('decimal',{
//       regex: this.regexMap[type],
//       // alias:"decimal",
//       // // placeholder: "",
//       rightAlign: false,
//       // radixPoint: ",",
//       // // radixSeparator:",",
//       // autoGroup: false,
//       // groupSeparator: " ",
//       // groupSize: 3,
//       // integerDigits: 0,
//       // digits: 10,
//       autoUnmask:true,
//       unmaskAsNumber : true
      
//     }).mask(this.el.nativeElement);
//   }

  @HostListener('keypress', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent>event;
    let keyCode = e.keyCode;
    // console.log(keyCode);
    

    let k = e.charCode; //         k = event.keyCode;  (Both can be used)
    // console.log(k);
    return (k==44 || (k>=48 && k<=57));
  }

  
  
}
