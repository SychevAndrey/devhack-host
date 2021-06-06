import {Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { LookupService } from '../lookup.service';
import { RemoteComponentConfig } from '../remote-component-config';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

    configs: RemoteComponentConfig[] = [];
    configs2: RemoteComponentConfig[] = [];
    synchronizer: Subject<RemoteComponentConfig> = new Subject();
    oilAdded: boolean = false;
    btcAdded: boolean = false;

    constructor(private lookupService: LookupService) { }

    ngOnInit(): void {
        this.loadConfigs();
    }

    async loadConfigs(): Promise<void> {
        this.configs = await this.lookupService.lookup();
    }

    add(config: RemoteComponentConfig) {
        if (config === this.configs[1]) {
            this.oilAdded = true
        } else {
            this.btcAdded = true
        }
        this.configs2.push(config);
    }

}
