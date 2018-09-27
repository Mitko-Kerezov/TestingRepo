"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../core/services/backend.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var navigation_service_1 = require("../core/services/navigation.service");
var CmdDetailsComponent = /** @class */ (function () {
    function CmdDetailsComponent(navigationService, backendService, activatedRoute) {
        this.navigationService = navigationService;
        this.backendService = backendService;
        this.activatedRoute = activatedRoute;
        this.dataStoreType = kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache;
    }
    CmdDetailsComponent.prototype.ngOnInit = function () {
        this.item = this.backendService.findById("customers", this.activatedRoute.snapshot.params.id, this.dataStoreType);
    };
    CmdDetailsComponent.prototype.editTapped = function (itemId) {
        this.navigationService.navigateTo("../../fq/" + itemId);
    };
    CmdDetailsComponent.prototype.placeTapped = function (itemId) {
        this.navigationService.navigateTo("../../em-form/" + itemId, {
            queryParams: {
                foreignKeyName: "cust_id",
            }
        });
    };
    CmdDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./cmd-details.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService,
            backend_service_1.BackendService,
            router_1.ActivatedRoute])
    ], CmdDetailsComponent);
    return CmdDetailsComponent;
}());
exports.CmdDetailsComponent = CmdDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21kLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY21kLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUFpRDtBQUNqRCxvRUFBa0U7QUFDbEUsbUVBQWlEO0FBQ2pELDBFQUF3RTtBQU14RTtJQUtJLDZCQUFvQixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTjFDLGtCQUFhLEdBQUcsZ0NBQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBT25ELENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVNLHdDQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxjQUFZLE1BQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSx5Q0FBVyxHQUFsQixVQUFtQixNQUFjO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsbUJBQWlCLE1BQVEsRUFBRTtZQUN6RCxXQUFXLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLFNBQVM7YUFDNUI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBeEJRLG1CQUFtQjtRQUovQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FNeUMsc0NBQWlCO1lBQ3BCLGdDQUFjO1lBQ2QsdUJBQWM7T0FQekMsbUJBQW1CLENBeUIvQjtJQUFELDBCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jbWQtZGV0YWlscy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENtZERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZGF0YVN0b3JlVHlwZSA9IEtpbnZleS5EYXRhU3RvcmVUeXBlLkNhY2hlO1xuICAgIFxuICAgIHB1YmxpYyBpdGVtOiBPYnNlcnZhYmxlPGFueT47XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuYmFja2VuZFNlcnZpY2UuZmluZEJ5SWQoXCJjdXN0b21lcnNcIiwgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQsIHRoaXMuZGF0YVN0b3JlVHlwZSk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBlZGl0VGFwcGVkKGl0ZW1JZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGVUbyhgLi4vLi4vZnEvJHtpdGVtSWR9YCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBwbGFjZVRhcHBlZChpdGVtSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlVG8oYC4uLy4uL2VtLWZvcm0vJHtpdGVtSWR9YCwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBmb3JlaWduS2V5TmFtZTogXCJjdXN0X2lkXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==