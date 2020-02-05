import { Directive, ElementRef, Input } from "@angular/core";
import * as Inputmask from "inputmask";
@Directive({
  selector: "[appCurrency]"
})
export class CurrencyDirective {
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

  @Input("appCurrency")
  public set defineInputType(type: string) {
    Inputmask('decimal',{
      // regex: this.regexMap[type],
      alias:"decimal",
      placeholder: "",
      rightAlign: false,
      radixPoint: ",",
      autoGroup: true,
      groupSeparator: " ",
      groupSize: 3,
      integerDigits: 0,
      digits: 10,
      autoUnmask:true,
      unmaskAsNumber : true
      
    }).mask(this.el.nativeElement);
  }

  
  
}
