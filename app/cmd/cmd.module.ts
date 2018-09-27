
import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "../shared/shared.module";
import { CmdListComponent } from "./cmd-list.component";
import { CmdDetailsComponent } from "./cmd-details.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "cmd-list" },
            { path: "cmd-list", component: CmdListComponent },
            { path: "cmd-details/:id", component: CmdDetailsComponent }
        ])
    ],
    entryComponents: [
        CmdListComponent,
        CmdDetailsComponent,
    ],
    declarations: [
        CmdListComponent,
        CmdDetailsComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CmdModule { }
