import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { config } from "./core/config";

@NgModule({
    imports: [NativeScriptRouterModule.forRoot([
        {
            path: "login",
            loadChildren: "./login/login.module#LoginModule"
        },
        ...config.routes.tabs,
        ...config.routes.modals
    ])],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }