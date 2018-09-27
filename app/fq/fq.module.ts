
import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "../shared/shared.module";
import { FqListComponent } from "./fq-list.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "fq-list" },
            { path: "fq-list", component: FqListComponent },
            { path: "fq-list/:id", component: FqListComponent }
        ])
    ],
    entryComponents: [
        FqListComponent,
    ],
    declarations: [
        FqListComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FqModule { }
