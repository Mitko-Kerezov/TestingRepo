"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("../shared/shared.module");
var cmd_list_component_1 = require("./cmd-list.component");
var cmd_details_component_1 = require("./cmd-details.component");
var CmdModule = /** @class */ (function () {
    function CmdModule() {
    }
    CmdModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "cmd-list" },
                    { path: "cmd-list", component: cmd_list_component_1.CmdListComponent },
                    { path: "cmd-details/:id", component: cmd_details_component_1.CmdDetailsComponent }
                ])
            ],
            entryComponents: [
                cmd_list_component_1.CmdListComponent,
                cmd_details_component_1.CmdDetailsComponent,
            ],
            declarations: [
                cmd_list_component_1.CmdListComponent,
                cmd_details_component_1.CmdDetailsComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], CmdModule);
    return CmdModule;
}());
exports.CmdModule = CmdModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21kLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNtZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBc0U7QUFDdEUsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCwyREFBd0Q7QUFDeEQsaUVBQThEO0FBdUI5RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBckJyQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtvQkFDcEMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBRTtvQkFDakQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO2lCQUM5RCxDQUFDO2FBQ0w7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IscUNBQWdCO2dCQUNoQiwyQ0FBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YscUNBQWdCO2dCQUNoQiwyQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsRUFDVjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBDbWRMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY21kLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDbWREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vY21kLWRldGFpbHMuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiY21kLWxpc3RcIiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImNtZC1saXN0XCIsIGNvbXBvbmVudDogQ21kTGlzdENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImNtZC1kZXRhaWxzLzppZFwiLCBjb21wb25lbnQ6IENtZERldGFpbHNDb21wb25lbnQgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIENtZExpc3RDb21wb25lbnQsXG4gICAgICAgIENtZERldGFpbHNDb21wb25lbnQsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ21kTGlzdENvbXBvbmVudCxcbiAgICAgICAgQ21kRGV0YWlsc0NvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIENtZE1vZHVsZSB7IH1cbiJdfQ==