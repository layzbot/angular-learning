import { Directive, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';
import { LoggingService } from '../services/logger.service';

@Directive({
    selector: '[appConsoleLogger]',
    providers: [LoggingService],
})
export class ConsoleLoggerDirective implements OnInit {

    @HostBinding('style.backgroundColor') bgColor = 'transparent';

    @HostListener('mouseenter') onMouseEnter() {
        console.log('Current Color ' + this.bgColor);
        this.bgColor = 'blue';
    }

    constructor(private elementRef: ElementRef,
                private loggingService: LoggingService) {
    }


    ngOnInit(): void {
        this.loggingService.logToConsole(this.elementRef);
    }
}
