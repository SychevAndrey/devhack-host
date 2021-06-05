import {Component, OnInit} from '@angular/core';
import {openDB} from "idb";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    username: string = '';
    dbPromise: any
    constructor() { }

    ngOnInit(): void {
        this.dbPromise = openDB('module-federation', 1, {
            upgrade(db) {
                db.createObjectStore('host');
            },
        });
    }

    async setName() {
        (await this.dbPromise).put('host', this.username, 'user')
    }

}
