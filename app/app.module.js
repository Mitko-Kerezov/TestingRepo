"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
var app_component_1 = require("./app.component");
var side_drawer_items_component_1 = require("./core/navigation/side-drawer-items.component");
var tabs_component_1 = require("./core/navigation/tabs.component");
var modal_component_1 = require("./core/navigation/modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [
                modal_component_1.ModalComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
                core_module_1.CoreModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                side_drawer_items_component_1.SideDrawerItemsComponent,
                tabs_component_1.TabsComponent,
                modal_component_1.ModalComponent,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDJEQUF1RDtBQUN2RCxrREFBK0M7QUFFL0MsaURBQStDO0FBQy9DLDZGQUF3RjtBQUN4RixtRUFBZ0U7QUFDaEUscUVBQW1FO0FBc0JuRTtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBcEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLGVBQWUsRUFBRTtnQkFDYixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsd0JBQVU7Z0JBQ1Ysd0JBQVUsQ0FBQyxPQUFPLEVBQUU7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBRVosc0RBQXdCO2dCQUN4Qiw4QkFBYTtnQkFDYixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSBcIi4vY29yZS9jb3JlLm1vZHVsZVwiXG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZGVEcmF3ZXJJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvcmUvbmF2aWdhdGlvbi9zaWRlLWRyYXdlci1pdGVtcy5jb21wb25lbnRcIlxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NvcmUvbmF2aWdhdGlvbi90YWJzLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2NvcmUvbmF2aWdhdGlvbi9tb2RhbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBNb2RhbENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlLFxuICAgICAgICBDb3JlTW9kdWxlLmZvclJvb3QoKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcblxuICAgICAgICBTaWRlRHJhd2VySXRlbXNDb21wb25lbnQsXG4gICAgICAgIFRhYnNDb21wb25lbnQsXG4gICAgICAgIE1vZGFsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19