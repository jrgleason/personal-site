import { HostBinding, Directive, HostListener, Host, EventEmitter, ElementRef } from "@angular/core";
@Directive({
    selector: "[jgCollapse]",
})
export class CollapseDirective {
    open: EventEmitter<any> = new EventEmitter();
    close: EventEmitter<any> = new EventEmitter();
    get expanded(){
        return this.isExpanded;
    }

    @HostBinding("class.expanded")
    private isExpanded: boolean = false;

    // TODO: I really hate doing it like this but I have to till I can figure out a better way
    @HostBinding("style.position")
    private readonly POSITION = "relative";

    constructor(private el: ElementRef) { }
    @HostListener("click")
    toggle() {
        if (this.isExpanded) {
            // Was already expanded so close
            this.close.emit();
        }
        else {
            this.open.emit();
        }
        this.isExpanded = !this.isExpanded;
    }
    // @HostListener("keydown", ["$event"])
    // dropdownKeydown(event: KeyboardEvent) {
    //     if (event.keyCode === 40) { // down
    //
    //     }
    // }
}
@Directive({
    selector: "[jgCollapseArea]",
})
export class CollapseAreaDirective {
    @HostBinding("class.isOpen")
    private isOpen = false;
    // TODO: I really hate doing it like this but I have to till I can figure out a better way
    @HostBinding("style.position")
    private readonly POSITION = "absolute";
    @HostBinding("style.overflow")
    private readonly OVERFLOW = "hidden";
    @HostBinding("style.height")
    private height: string = "0";

    get currentHeight(){
        return this.height;
    }

    get opened(){
        return this.isOpen;
    }

    constructor(@Host() private collapse: CollapseDirective) {
        this.collapse.open.subscribe(this.open);
        this.collapse.close.subscribe(this.close);
    }
    private close = () => {
        this.height = "0";
        this.isOpen = false;
    }
    private open = () => {
        this.height = "";
        this.isOpen = true;
    }
}