
import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "../shared/shared.module";
import { EmFormListComponent } from "./em-form-list.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "em-form-list" },
            { path: "em-form-list", component: EmFormListComponent },
            { path: "em-form-list/:id", component: EmFormListComponent }
        ]) 
    ],
    entryComponents: [
        EmFormListComponent,
    ],
    declarations: [
        EmFormListComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class EmFormModule { }
