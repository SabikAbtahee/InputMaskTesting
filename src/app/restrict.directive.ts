import { Directive, ElementRef, Input, HostListener, Host } from "@angular/core";
import * as Inputmask from "inputmask";
@Directive({
  selector: "[restrict]"
})
export class RestrictDirective {
  previousCarretPosition = 0;
  totalLength = 0;
  flag=0;
  constructor(private el: ElementRef) {}

  // map of some of the regex strings I'm using (TODO: add your own)
  private regexMap = {
    integer: "^[0-9]*$",
    float: "^[+-]?([0-9]*[.])?[0-9]+$",
    words: "([A-z]*\\s)*",
    point25: "^-?[0-9]*(?:\\.25|\\.50|\\.75|)$",
    custom: "[0-9][0-9]*,?[0-9]*"
  };

  

  @HostListener("keypress", ["$event"])
  returnInputBasedOnPattern(event) {
    let e = <KeyboardEvent>event;
    let k = e.charCode;
    return k == 44 || (k >= 48 && k <= 57);
  }

  // @HostListener("keyup", ["$event", '$event.keyCode'])
  // @HostListener("keydown", ["$event", '$event.keyCode'])
  // check2(event,keyCode){
  //   let current = (event.target.value.length);
  //   if(this.totalLength-current<0){
  //     this.setCaretPosition(event,this.previousCarretPosition+(this.totalLength-current));
  //   }
  //   else if(this.totalLength-current>0){
  //     this.setCaretPosition(event,this.previousCarretPosition+(this.totalLength-current));

  //   }
    // this.storeCaretPositionAndTotalLength(event);
  // }

  @HostListener("keyup", ["$event", '$event.keyCode'])
  @HostListener("keydown", ["$event", '$event.keyCode'])
  onKeyDown(event,keycode) {
  
    let prevPosition = this.previousCarretPosition;
    let previousLength = this.totalLength;
    this.storeCaretPositionAndTotalLength(event);
    let afterLength = this.totalLength;

    let increased = afterLength - previousLength;
    let decreased = previousLength - afterLength;
    if (increased > 0) {
      this.setCaretPosition(event, prevPosition + increased);
    }

    if (decreased >= 0 && keycode==8) {

      if (decreased==0) {
        this.setCaretPosition(event, prevPosition-1);
      } else {
        this.setCaretPosition(event, prevPosition - decreased);
      }
    }
  }

  // @HostListener("keydown",["$event","$event.keyCode"])
  // checkBackspace(event,keyCode){
  //   if(keyCode==8){
  //     console.log(this.previousCarretPosition);
  //     this.setCaretPosition(event, this.previousCarretPosition-1);
  //   }
  // }

  // @HostListener("keydown" ,["$event"])
  // checkBackspace(event){
  //   event.preventDefault();
  //   console.log(event);
  // }

  @HostListener("keydown", ["$event"])
  @HostListener("mouseenter", ["$event"])
  @HostListener("mouseleave", ["$event"])
  storeValueBasedOnEvent(event) {
    this.storeCaretPositionAndTotalLength(event);
  }

  storeCaretPositionAndTotalLength(event) {
    this.previousCarretPosition = event.target.selectionStart;
    this.totalLength = event.target.value.length;
  }

  setCaretPosition(event, position) {
    event.target.selectionStart = position;
    event.target.selectionEnd = position;
  }
}
