import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    status: boolean;

    constructor() {
        document.addEventListener('status', (event: any) => {
            console.log(event.detail);

            this.status = event.detail;
        });
    }
}
