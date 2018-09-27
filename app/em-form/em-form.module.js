"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("../shared/shared.module");
var em_form_list_component_1 = require("./em-form-list.component");
var EmFormModule = /** @class */ (function () {
    function EmFormModule() {
    }
    EmFormModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "em-form-list" },
                    { path: "em-form-list", component: em_form_list_component_1.EmFormListComponent },
                    { path: "em-form-list/:id", component: em_form_list_component_1.EmFormListComponent }
                ])
            ],
            entryComponents: [
                em_form_list_component_1.EmFormListComponent,
            ],
            declarations: [
                em_form_list_component_1.EmFormListComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], EmFormModule);
    return EmFormModule;
}());
exports.EmFormModule = EmFormModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW0tZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbS1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFzRTtBQUN0RSxzREFBdUU7QUFDdkUseURBQXVEO0FBQ3ZELG1FQUErRDtBQXFCL0Q7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFuQnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw0QkFBWTtnQkFDWixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFO29CQUN4QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDRDQUFtQixFQUFFO29CQUN4RCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsNENBQW1CLEVBQUU7aUJBQy9ELENBQUM7YUFDTDtZQUNELGVBQWUsRUFBRTtnQkFDYiw0Q0FBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNENBQW1CO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLEVBQ1Y7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IEVtRm9ybUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9lbS1mb3JtLWxpc3QuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiZW0tZm9ybS1saXN0XCIgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJlbS1mb3JtLWxpc3RcIiwgY29tcG9uZW50OiBFbUZvcm1MaXN0Q29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiZW0tZm9ybS1saXN0LzppZFwiLCBjb21wb25lbnQ6IEVtRm9ybUxpc3RDb21wb25lbnQgfVxuICAgICAgICBdKSBcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBFbUZvcm1MaXN0Q29tcG9uZW50LFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEVtRm9ybUxpc3RDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBFbUZvcm1Nb2R1bGUgeyB9XG4iXX0=