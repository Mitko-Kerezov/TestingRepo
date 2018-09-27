"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("../shared/shared.module");
var fq_list_component_1 = require("./fq-list.component");
var FqModule = /** @class */ (function () {
    function FqModule() {
    }
    FqModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "fq-list" },
                    { path: "fq-list", component: fq_list_component_1.FqListComponent },
                    { path: "fq-list/:id", component: fq_list_component_1.FqListComponent }
                ])
            ],
            entryComponents: [
                fq_list_component_1.FqListComponent,
            ],
            declarations: [
                fq_list_component_1.FqListComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], FqModule);
    return FqModule;
}());
exports.FqModule = FqModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQXNFO0FBQ3RFLHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQseURBQXNEO0FBcUJ0RDtJQUFBO0lBQXdCLENBQUM7SUFBWixRQUFRO1FBbkJwQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtvQkFDbkMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxtQ0FBZSxFQUFFO29CQUMvQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1DQUFlLEVBQUU7aUJBQ3RELENBQUM7YUFDTDtZQUNELGVBQWUsRUFBRTtnQkFDYixtQ0FBZTthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDVixtQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFFBQVEsQ0FBSTtJQUFELGVBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgRnFMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZnEtbGlzdC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJmcS1saXN0XCIgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJmcS1saXN0XCIsIGNvbXBvbmVudDogRnFMaXN0Q29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiZnEtbGlzdC86aWRcIiwgY29tcG9uZW50OiBGcUxpc3RDb21wb25lbnQgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEZxTGlzdENvbXBvbmVudCxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBGcUxpc3RDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBGcU1vZHVsZSB7IH1cbiJdfQ==