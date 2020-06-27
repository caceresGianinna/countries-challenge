import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  @Input('appTheme') theme: {[prop: string]: string};

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngOnChanges() {
    Object.keys(this.theme).forEach(prop => {
      this.el.nativeElement.style.setProperty(`--${prop}`, this.theme[prop]);
    });
  }

}
