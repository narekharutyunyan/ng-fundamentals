import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
    styles: [`

    `]
})

export class EventsListComponent implements OnInit {
    event = {
        name: 'ngConf 2025',
        date: '3/1/2025',
        time: '8am',
        location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}
    }

    constructor() {
    }

    ngOnInit() {
    }

    handleEventClicked(data){
        console.log('received:', data)
    }
}
