import { Component, OnInit } from '@angular/core';
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

    constructor(private lookupService: LookupService) { }

    ngOnInit(): void {
        this.loadConfigs().then(() => console.log('MFE config loaded'));
    }

    async loadConfigs(): Promise<void> {
        this.configs = await this.lookupService.lookup();
    }

    add(config: RemoteComponentConfig) {
        this.configs2.push(config);
    }

}
