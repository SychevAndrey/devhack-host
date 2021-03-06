import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginProxyComponent } from './plugin-proxy.component';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { TransferComponent } from './transfer/transfer.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        PluginProxyComponent,
        HomeComponent,
        WidgetsComponent,
        TransferComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
