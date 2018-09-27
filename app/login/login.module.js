"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("../shared/shared.module");
var anonymous_login_component_1 = require("./anonymous-login.component");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", component: anonymous_login_component_1.AnonymousLoginComponent }
                ])
            ],
            entryComponents: [
                anonymous_login_component_1.AnonymousLoginComponent
            ],
            declarations: [
                anonymous_login_component_1.AnonymousLoginComponent
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFFdkQseUVBQXFFO0FBaUJyRTtJQUFBO0lBQTBCLENBQUM7SUFBZCxXQUFXO1FBZnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw0QkFBWTtnQkFDWixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUU7aUJBQ25ELENBQUM7YUFDTDtZQUNELGVBQWUsRUFBRTtnQkFDYixtREFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsbURBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFdBQVcsQ0FBRztJQUFELGtCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBbm9ueW1vdXNMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2Fub255bW91cy1sb2dpbi5jb21wb25lbnRcIlxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEFub255bW91c0xvZ2luQ29tcG9uZW50IH1cbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBBbm9ueW1vdXNMb2dpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFub255bW91c0xvZ2luQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUge31cbiJdfQ==