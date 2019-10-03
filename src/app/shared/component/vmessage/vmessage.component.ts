import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-vmessage',
    templateUrl: './vmessage.component.html'
})
export class vmessageComponent{

    @Input() text='';
}