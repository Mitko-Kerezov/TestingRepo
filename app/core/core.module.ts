import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { LoggedInLazyLoadGuard } from "./guards/logged-in-lazy-load.guard";

import { HelpersService } from "./services/helpers.service";
import { NavigationService } from "./services/navigation.service";
import { BackendService } from "./services/backend.service";
import { UserService } from "./services/user.service";

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
    ],
    exports: [
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                LoggedInLazyLoadGuard,

                ModalDialogService,
                HelpersService,
                NavigationService,
                BackendService,
                UserService
            ]
        };
    }
}
