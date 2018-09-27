"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var config_1 = require("./core/config");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot([
                    {
                        path: "login",
                        loadChildren: "./login/login.module#LoginModule"
                    }
                ].concat(config_1.config.routes.tabs, config_1.config.routes.modals))],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSx3Q0FBdUM7QUFhdkM7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVg1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPO29CQUN0Qzt3QkFDSSxJQUFJLEVBQUUsT0FBTzt3QkFDYixZQUFZLEVBQUUsa0NBQWtDO3FCQUNuRDt5QkFDRSxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFDbEIsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQ3pCLENBQUM7WUFDSCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vY29yZS9jb25maWdcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46IFwiLi9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIlxuICAgICAgICB9LFxuICAgICAgICAuLi5jb25maWcucm91dGVzLnRhYnMsXG4gICAgICAgIC4uLmNvbmZpZy5yb3V0ZXMubW9kYWxzXG4gICAgXSldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19