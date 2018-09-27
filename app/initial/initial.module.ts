
import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "../shared/shared.module";
import { InitialListComponent } from "./initial-list.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "initial-list" },
            { path: "initial-list", component: InitialListComponent }
        ])
    ],
    entryComponents: [
        InitialListComponent,   
    ],
    declarations: [
        InitialListComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class InitialModule { }
