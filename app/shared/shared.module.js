"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-chart/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-autocomplete/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-gauge/angular");
var back_navigation_directive_1 = require("./directives/back-navigation.directive");
var hide_nav_bar_directive_1 = require("./directives/hide-nav-bar.directive");
var show_nav_bar_directive_1 = require("./directives/show-nav-bar.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIChartModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIAutoCompleteTextViewModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIGaugeModule
            ],
            exports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIChartModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIAutoCompleteTextViewModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIGaugeModule,
                back_navigation_directive_1.BackNavigation,
                hide_nav_bar_directive_1.HideNavBarDirective,
                show_nav_bar_directive_1.ShowNavBarDirective,
            ],
            declarations: [
                back_navigation_directive_1.BackNavigation,
                hide_nav_bar_directive_1.HideNavBarDirective,
                show_nav_bar_directive_1.ShowNavBarDirective,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLG9EQUFxRTtBQUNyRSx5REFBMEU7QUFDMUUsNERBQWdGO0FBQ2hGLDREQUFnRjtBQUNoRixnRUFBZ0c7QUFDaEcsNERBQWdGO0FBQ2hGLHlEQUEwRTtBQUUxRSxvRkFBd0U7QUFDeEUsOEVBQTBFO0FBQzFFLDhFQUEwRTtBQWtDMUU7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQWhDeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QixtQ0FBeUI7Z0JBQ3pCLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1QixrREFBd0M7Z0JBQ3hDLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QixtQ0FBeUI7Z0JBQ3pCLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1QixrREFBd0M7Z0JBQ3hDLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2dCQUV6QiwwQ0FBYztnQkFDZCw0Q0FBbUI7Z0JBQ25CLDRDQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDViwwQ0FBYztnQkFDZCw0Q0FBbUI7Z0JBQ25CLDRDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBCYWNrTmF2aWdhdGlvbiB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvYmFjay1uYXZpZ2F0aW9uLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgSGlkZU5hdkJhckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvaGlkZS1uYXYtYmFyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgU2hvd05hdkJhckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvc2hvdy1uYXYtYmFyLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuXG4gICAgICAgIEJhY2tOYXZpZ2F0aW9uLFxuICAgICAgICBIaWRlTmF2QmFyRGlyZWN0aXZlLFxuICAgICAgICBTaG93TmF2QmFyRGlyZWN0aXZlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJhY2tOYXZpZ2F0aW9uLFxuICAgICAgICBIaWRlTmF2QmFyRGlyZWN0aXZlLFxuICAgICAgICBTaG93TmF2QmFyRGlyZWN0aXZlLFxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuIl19