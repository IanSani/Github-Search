import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    this.strikethrough("strikethrough");
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.strikethrough(null);
  }
  private strikethrough(strikethrough:string){
    this.elem.nativeElement.style.backgroundColor='grey';
  }

}
