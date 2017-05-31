import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left: 20px; }
        .well div { color: red }
    `]
})

export class EventThumbnailComponent implements OnInit {
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    someProperty: any = "Some Value"


    constructor() {
    }

    ngOnInit() {
    }

    handleClickMe() {
        console.log('clicked')
        this.eventClick.emit('foo')
    }

    logFoo() {
        console.log('foo')
    }
}