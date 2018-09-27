"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("./core/config");
var navigation_service_1 = require("./core/services/navigation.service");
var user_service_1 = require("./core/services/user.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(navigationService, userService, 
    // provide access to root ViewContainerRef from AppComponent
    viewContainerRef) {
        this.navigationService = navigationService;
        this.userService = userService;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(AppComponent.prototype, "enableSideDrawer", {
        get: function () {
            return config_1.config.routes.modals.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isLoggedIn.then(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.navigationService.navigateToModal("login");
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: "./app.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService,
            user_service_1.UserService,
            core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsd0NBQXVDO0FBQ3ZDLHlFQUF1RTtBQUN2RSw2REFBMkQ7QUFLM0Q7SUFLSSxzQkFBb0IsaUJBQW9DLEVBQ3BDLFdBQXdCO0lBQ2hDLDREQUE0RDtJQUNyRCxnQkFBa0M7UUFIakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUV6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3JELENBQUM7SUFSRCxzQkFBSSwwQ0FBZ0I7YUFBcEI7WUFDSSxPQUFPLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFRRCwrQkFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFVO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuRDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpCUSxZQUFZO1FBSHhCLGdCQUFTLENBQUM7WUFDUCxXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBTXlDLHNDQUFpQjtZQUN2QiwwQkFBVztZQUVQLHVCQUFnQjtPQVI1QyxZQUFZLENBa0J4QjtJQUFELG1CQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb3JlL2NvbmZpZ1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb3JlL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9jb3JlL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZ2V0IGVuYWJsZVNpZGVEcmF3ZXIoKSB7XG4gICAgICAgIHJldHVybiBjb25maWcucm91dGVzLm1vZGFscy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIC8vIHByb3ZpZGUgYWNjZXNzIHRvIHJvb3QgVmlld0NvbnRhaW5lclJlZiBmcm9tIEFwcENvbXBvbmVudFxuICAgICAgICAgICAgICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuaXNMb2dnZWRJbi50aGVuKChpc0xvZ2dlZEluKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlVG9Nb2RhbChcImxvZ2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19