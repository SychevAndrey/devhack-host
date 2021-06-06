import { Component, OnInit } from '@angular/core';
import { openDB } from 'idb';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    cash: number | undefined;
    dbPromise: any;
    oilFlag: boolean;
    constructor() {}

    ngOnInit(): void {
        this.dbPromise = openDB('module-federation', 1, {
            upgrade(db) {
                db.createObjectStore('host');
            },
        });
        this.checkOilFlag();
    }

    async checkOilFlag() {
        (await this.dbPromise)
            .get('host', 'oil')
            .then((value: boolean) => (this.oilFlag = value));
    }

    async setName() {
        (await this.dbPromise).put('host', this.cash, 'cash');
    }
}
