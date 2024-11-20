import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class AppHighlightDirective implements OnInit {
    constructor(private elRef: ElementRef){}

    ngOnInit(): void {
        this.elRef.nativeElement.style.backgroundColor = 'green';
    }
}