import { Injectable } from "@angular/core";
import { RemoteComponentConfig } from "./remote-component-config";

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<RemoteComponentConfig[]> {
        return Promise.resolve([
            {
                remoteEntry: 'https://dev-hack-remote2.vercel.app/remoteEntry.js',
                remoteName: 'remote2',
                exposedModule: './BTCComponent',
                displayName: 'BTCComponent',
                componentName: 'BTCComponent'
            },
            {
                remoteEntry: 'https://dev-hack-remote2.vercel.app/remoteEntry.js',
                remoteName: 'remote2',
                exposedModule: './OilComponent',
                displayName: 'OilComponent',
                componentName: 'OilComponent'
            }
        ] as RemoteComponentConfig[]);
    }
}
