"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var metadata = require("./em-form-form.metadata.json");
var router_1 = require("@angular/router");
var backend_service_1 = require("../core/services/backend.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var navigation_service_1 = require("../core/services/navigation.service");
var back_navigation_directive_1 = require("../shared/directives/back-navigation.directive");
var EmFormListComponent = /** @class */ (function () {
    function EmFormListComponent(injector, navigationService, backendService, activatedRoute) {
        this.injector = injector;
        this.navigationService = navigationService;
        this.backendService = backendService;
        this.activatedRoute = activatedRoute;
        this.dataStoreType = kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache;
        try {
            this.modalDialogParams = this.injector.get(dialogs_1.ModalDialogParams);
        }
        catch (_a) { }
    }
    EmFormListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        var itemId = this.activatedRoute.snapshot.params.id;
        var foreignKeyName = this.modalDialogParams && this.modalDialogParams.context &&
            this.modalDialogParams.context.params && this.modalDialogParams.context.params.queryParams &&
            this.modalDialogParams.context.params.queryParams.foreignKeyName;
        if (itemId && !foreignKeyName) {
            this.backendService.findById("emptyCollection", itemId, this.dataStoreType).subscribe(function (dbItem) {
                _this.item = dbItem;
            });
        }
        else {
            this.item = (_a = { Name: "", Type: "", Id: "", Text: "" }, _a['custom;column'] = "", _a['spacey column'] = 0, _a);
            if (foreignKeyName) {
                this.item[foreignKeyName] = itemId;
            }
        }
        this.metadata = metadata;
    };
    EmFormListComponent.prototype.submitForm = function () {
        var _this = this;
        this.radDataForm.dataForm.validateAll()
            .then(function (result) {
            if (result) {
                var itemToSave = _this.item;
                _this.item = null;
                _this.backendService.save("emptyCollection", itemToSave)
                    .then(function () {
                    _this.backNavigation.goBack();
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild(back_navigation_directive_1.BackNavigation),
        __metadata("design:type", back_navigation_directive_1.BackNavigation)
    ], EmFormListComponent.prototype, "backNavigation", void 0);
    __decorate([
        core_1.ViewChild("formObject"),
        __metadata("design:type", Object)
    ], EmFormListComponent.prototype, "radDataForm", void 0);
    EmFormListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./em-form-list.component.html"
        }),
        __metadata("design:paramtypes", [core_1.Injector,
            navigation_service_1.NavigationService,
            backend_service_1.BackendService,
            router_1.ActivatedRoute])
    ], EmFormListComponent);
    return EmFormListComponent;
}());
exports.EmFormListComponent = EmFormListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW0tZm9ybS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtLWZvcm0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFDdkUsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsMENBQWlEO0FBQ2pELG9FQUFrRTtBQUNsRSxtRUFBNEU7QUFDNUUsbUVBQWlEO0FBQ2pELDBFQUF3RTtBQUN4RSw0RkFBK0U7QUFNL0U7SUFRSSw2QkFBb0IsUUFBa0IsRUFDbEIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGNBQThCO1FBSDlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVjFDLGtCQUFhLEdBQUcsZ0NBQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBVy9DLElBQUk7WUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMkJBQWlCLENBQUMsQ0FBQTtTQUM3RDtRQUFDLFdBQU0sR0FBRztJQUNmLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBaUJDOztRQWhCRyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3RELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTztZQUM5RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQzFGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDbEUsSUFBSSxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUMzRixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztTQUNIO2FBQU07WUFDTixJQUFJLENBQUMsSUFBSSxXQUFLLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUUsR0FBQyxlQUFlLElBQUcsRUFBRSxFQUFFLEdBQUMsZUFBZSxJQUFHLENBQUMsS0FBRSxDQUFDO1lBQ2xHLElBQUksY0FBYyxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNuQztTQUNEO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTthQUNwQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1gsSUFBSSxNQUFNLEVBQUU7Z0JBQ1gsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztnQkFDN0IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQztxQkFDckQsSUFBSSxDQUFDO29CQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUEzQzBCO1FBQTFCLGdCQUFTLENBQUMsMENBQWMsQ0FBQztrQ0FBaUIsMENBQWM7K0RBQUM7SUFDakM7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7OzREQUFrQjtJQU5qQyxtQkFBbUI7UUFKL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBU2dDLGVBQVE7WUFDQyxzQ0FBaUI7WUFDcEIsZ0NBQWM7WUFDZCx1QkFBYztPQVh6QyxtQkFBbUIsQ0FpRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5jb25zdCBtZXRhZGF0YSA9IHJlcXVpcmUoXCIuL2VtLWZvcm0tZm9ybS5tZXRhZGF0YS5qc29uXCIpO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrTmF2aWdhdGlvbiB9IGZyb20gXCIuLi9zaGFyZWQvZGlyZWN0aXZlcy9iYWNrLW5hdmlnYXRpb24uZGlyZWN0aXZlXCJcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2VtLWZvcm0tbGlzdC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEVtRm9ybUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZGF0YVN0b3JlVHlwZSA9IEtpbnZleS5EYXRhU3RvcmVUeXBlLkNhY2hlO1xuICAgIHByaXZhdGUgbW9kYWxEaWFsb2dQYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zO1xuICAgIHB1YmxpYyBpdGVtOiBhbnk7XG4gICAgcHVibGljIG1ldGFkYXRhOiBhbnk7XG4gICAgQFZpZXdDaGlsZChCYWNrTmF2aWdhdGlvbikgYmFja05hdmlnYXRpb246IEJhY2tOYXZpZ2F0aW9uO1xuICAgIEBWaWV3Q2hpbGQoXCJmb3JtT2JqZWN0XCIpIHJhZERhdGFGb3JtOiBhbnk7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgdHJ5IHsgXG4gICAgICAgIFx0dGhpcy5tb2RhbERpYWxvZ1BhcmFtcyA9IHRoaXMuaW5qZWN0b3IuZ2V0KE1vZGFsRGlhbG9nUGFyYW1zKVxuICAgICAgICB9IGNhdGNoIHsgfVxuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gICAgICAgIGNvbnN0IGZvcmVpZ25LZXlOYW1lID0gdGhpcy5tb2RhbERpYWxvZ1BhcmFtcyAmJiB0aGlzLm1vZGFsRGlhbG9nUGFyYW1zLmNvbnRleHQgJiZcbiAgICAgICAgXHR0aGlzLm1vZGFsRGlhbG9nUGFyYW1zLmNvbnRleHQucGFyYW1zICYmIHRoaXMubW9kYWxEaWFsb2dQYXJhbXMuY29udGV4dC5wYXJhbXMucXVlcnlQYXJhbXMgJiZcbiAgICAgICAgXHR0aGlzLm1vZGFsRGlhbG9nUGFyYW1zLmNvbnRleHQucGFyYW1zLnF1ZXJ5UGFyYW1zLmZvcmVpZ25LZXlOYW1lO1xuICAgICAgICBpZiAoaXRlbUlkICYmICFmb3JlaWduS2V5TmFtZSkge1xuICAgICAgICBcdHRoaXMuYmFja2VuZFNlcnZpY2UuZmluZEJ5SWQoXCJlbXB0eUNvbGxlY3Rpb25cIiwgaXRlbUlkLCB0aGlzLmRhdGFTdG9yZVR5cGUpLnN1YnNjcmliZShkYkl0ZW0gPT4ge1xuICAgICAgICBcdFx0dGhpcy5pdGVtID0gZGJJdGVtO1xuICAgICAgICBcdH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBcdHRoaXMuaXRlbSA9IHsgTmFtZTogXCJcIiwgVHlwZTogXCJcIiwgSWQ6IFwiXCIsIFRleHQ6IFwiXCIsIFsnY3VzdG9tO2NvbHVtbiddOiBcIlwiLCBbJ3NwYWNleSBjb2x1bW4nXTogMCB9O1xuICAgICAgICBcdGlmIChmb3JlaWduS2V5TmFtZSkge1xuICAgICAgICBcdFx0dGhpcy5pdGVtW2ZvcmVpZ25LZXlOYW1lXSA9IGl0ZW1JZDtcbiAgICAgICAgXHR9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICB9XG4gICAgXG4gICAgc3VibWl0Rm9ybSgpIHtcbiAgICBcdHRoaXMucmFkRGF0YUZvcm0uZGF0YUZvcm0udmFsaWRhdGVBbGwoKVxuICAgIFx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XG4gICAgXHRcdFx0XHRpZiAocmVzdWx0KSB7XG4gICAgXHRcdFx0XHRcdGNvbnN0IGl0ZW1Ub1NhdmUgPSB0aGlzLml0ZW07XG4gICAgXHRcdFx0XHRcdHRoaXMuaXRlbSA9IG51bGw7XG4gICAgXHRcdFx0XHRcdHRoaXMuYmFja2VuZFNlcnZpY2Uuc2F2ZShcImVtcHR5Q29sbGVjdGlvblwiLCBpdGVtVG9TYXZlKVxuICAgIFx0XHRcdFx0XHRcdC50aGVuKCgpID0+IHtcbiAgICBcdFx0XHRcdFx0XHRcdHRoaXMuYmFja05hdmlnYXRpb24uZ29CYWNrKCk7XG4gICAgXHRcdFx0XHRcdFx0fSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSk7XG4gICAgfVxufVxuIl19