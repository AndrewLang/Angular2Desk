
import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[StopPropagation]',
    host:{
        '(click)':'preventDefault($event)'
    }
})
export class StopPropagation {
    
    constructor() {
        
    }
    preventDefault(event:any){
        event.preventDefault();
        console.log("click event prevented.")
    }
}