import { Injectable } from "@angular/core";
import { RemoteComponentConfig } from "./remote-component-config";

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<RemoteComponentConfig[]> {
        return Promise.resolve([
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'remote2',
                exposedModule: './BTCComponent',
                displayName: 'BTCWidget',
                componentName: 'BTCComponent'
            },
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'remote2',
                exposedModule: './OilComponent',
                displayName: 'OilWidget',
                componentName: 'OilComponent'
            }
        ] as RemoteComponentConfig[]);
    }
}
