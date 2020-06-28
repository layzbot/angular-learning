import { Directive, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appConsoleLogger]',
})
export class ConsoleLoggerDirective implements OnInit {

    @HostBinding('style.backgroundColor') bgColor = 'transparent';

    @HostListener('mouseenter') onMouseEnter() {
        console.log('Current Color ' + this.bgColor);
        this.bgColor = 'blue';
    }

    constructor(private elementRef: ElementRef) {
    }


    ngOnInit(): void {
        console.log(this.elementRef);
    }
}
