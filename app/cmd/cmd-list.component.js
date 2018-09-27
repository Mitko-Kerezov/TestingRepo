"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../core/services/backend.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("@angular/router");
var navigation_service_1 = require("../core/services/navigation.service");
var CmdListComponent = /** @class */ (function () {
    function CmdListComponent(backendService, navigationService, activatedRoute) {
        this.backendService = backendService;
        this.navigationService = navigationService;
        this.activatedRoute = activatedRoute;
        this.dataStoreType = kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache;
    }
    CmdListComponent.prototype.ngOnInit = function () {
        this.myItems = this.backendService.find("customers", this.dataStoreType);
        console.log("pendingSyncEntities", JSON.stringify(kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('customers').pendingSyncEntities()));
        console.log("pendingSyncCount", JSON.stringify(kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('customers').pendingSyncCount()));
        // Kinvey.DataStore.collection('customers').clearSync();
    };
    CmdListComponent.prototype.onItemTap = function (item) {
        this.navigationService.navigate(["../cmd-details", item._id], { relativeTo: this.activatedRoute });
    };
    CmdListComponent.prototype.createTapped = function () {
        this.navigationService.navigateTo("../../fq");
    };
    CmdListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./cmd-list.component.html"
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            navigation_service_1.NavigationService,
            router_1.ActivatedRoute])
    ], CmdListComponent);
    return CmdListComponent;
}());
exports.CmdListComponent = CmdListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21kLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY21kLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELG9FQUFrRTtBQUNsRSxtRUFBaUQ7QUFDakQsMENBQWlEO0FBQ2pELDBFQUF3RTtBQU14RTtJQUtJLDBCQUFvQixjQUE4QixFQUM5QixpQkFBb0MsRUFDcEMsY0FBOEI7UUFGOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTjFDLGtCQUFhLEdBQUcsZ0NBQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBT25ELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDbEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGdDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM1Ryx3REFBd0Q7SUFDNUQsQ0FBQztJQUVNLG9DQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FDOUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQzVCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDbkMsQ0FBQztJQUNILENBQUM7SUFFTSx1Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTFCUSxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7eUNBTXNDLGdDQUFjO1lBQ1gsc0NBQWlCO1lBQ3BCLHVCQUFjO09BUHpDLGdCQUFnQixDQTJCNUI7SUFBRCx1QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY21kLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDbWRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGRhdGFTdG9yZVR5cGUgPSBLaW52ZXkuRGF0YVN0b3JlVHlwZS5DYWNoZTtcblxuICAgIHB1YmxpYyBteUl0ZW1zOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubXlJdGVtcyA9IHRoaXMuYmFja2VuZFNlcnZpY2UuZmluZChcImN1c3RvbWVyc1wiLCB0aGlzLmRhdGFTdG9yZVR5cGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInBlbmRpbmdTeW5jRW50aXRpZXNcIiwgSlNPTi5zdHJpbmdpZnkoS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKS5wZW5kaW5nU3luY0VudGl0aWVzKCkpKVxuICAgICAgICBjb25zb2xlLmxvZyhcInBlbmRpbmdTeW5jQ291bnRcIiwgSlNPTi5zdHJpbmdpZnkoS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKCdjdXN0b21lcnMnKS5wZW5kaW5nU3luY0NvdW50KCkpKVxuICAgICAgICAvLyBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ2N1c3RvbWVycycpLmNsZWFyU3luYygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoaXRlbSkge1xuICAgIFx0dGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShcbiAgICBcdFx0W1wiLi4vY21kLWRldGFpbHNcIiwgaXRlbS5faWRdLFxuICAgIFx0XHR7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUgfVxuICAgIFx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlVGFwcGVkKCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlVG8oYC4uLy4uL2ZxYCk7XG4gICAgfVxufVxuIl19