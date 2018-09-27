"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("../shared/shared.module");
var initial_list_component_1 = require("./initial-list.component");
var InitialModule = /** @class */ (function () {
    function InitialModule() {
    }
    InitialModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "initial-list" },
                    { path: "initial-list", component: initial_list_component_1.InitialListComponent }
                ])
            ],
            entryComponents: [
                initial_list_component_1.InitialListComponent,
            ],
            declarations: [
                initial_list_component_1.InitialListComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], InitialModule);
    return InitialModule;
}());
exports.InitialModule = InitialModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbml0aWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFzRTtBQUN0RSxzREFBdUU7QUFDdkUseURBQXVEO0FBQ3ZELG1FQUFnRTtBQW9CaEU7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFsQnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw0QkFBWTtnQkFDWixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFO29CQUN4QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO2lCQUM1RCxDQUFDO2FBQ0w7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsNkNBQW9CO2FBQ3ZCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZDQUFvQjthQUN2QjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBJbml0aWFsTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2luaXRpYWwtbGlzdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJpbml0aWFsLWxpc3RcIiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImluaXRpYWwtbGlzdFwiLCBjb21wb25lbnQ6IEluaXRpYWxMaXN0Q29tcG9uZW50IH1cbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBJbml0aWFsTGlzdENvbXBvbmVudCwgICBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBJbml0aWFsTGlzdENvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEluaXRpYWxNb2R1bGUgeyB9XG4iXX0=