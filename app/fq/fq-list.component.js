"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var metadata = require("./fq-form.metadata.json");
var router_1 = require("@angular/router");
var backend_service_1 = require("../core/services/backend.service");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var navigation_service_1 = require("../core/services/navigation.service");
var back_navigation_directive_1 = require("../shared/directives/back-navigation.directive");
var FqListComponent = /** @class */ (function () {
    function FqListComponent(injector, navigationService, backendService, activatedRoute) {
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
    FqListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var itemId = this.activatedRoute.snapshot.params.id;
        var foreignKeyName = this.modalDialogParams && this.modalDialogParams.context &&
            this.modalDialogParams.context.params && this.modalDialogParams.context.params.queryParams &&
            this.modalDialogParams.context.params.queryParams.foreignKeyName;
        if (itemId && !foreignKeyName) {
            console.log("Retrieving item from db");
            kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("customers").findById(itemId).subscribe(function (dbItem) {
                console.log("Item retrieved!");
                _this.item = dbItem;
            });
        }
        else {
            this.item = { name: "", salary: 0, loyal: false, added: "", username: "", phone: "" };
            if (foreignKeyName) {
                this.item[foreignKeyName] = itemId;
            }
        }
        this.metadata = metadata;
    };
    FqListComponent.prototype.submitForm = function () {
        var _this = this;
        this.radDataForm.dataForm.validateAll()
            .then(function (result) {
            if (result) {
                console.log("about to save", JSON.stringify(_this.item));
                _this.backendService.save("customers", _this.item)
                    .then(function () {
                    console.log("Saved!");
                    _this.backNavigation.goBack();
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild(back_navigation_directive_1.BackNavigation),
        __metadata("design:type", back_navigation_directive_1.BackNavigation)
    ], FqListComponent.prototype, "backNavigation", void 0);
    __decorate([
        core_1.ViewChild("formObject"),
        __metadata("design:type", Object)
    ], FqListComponent.prototype, "radDataForm", void 0);
    FqListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./fq-list.component.html"
        }),
        __metadata("design:paramtypes", [core_1.Injector,
            navigation_service_1.NavigationService,
            backend_service_1.BackendService,
            router_1.ActivatedRoute])
    ], FqListComponent);
    return FqListComponent;
}());
exports.FqListComponent = FqListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnEtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUNwRCwwQ0FBaUQ7QUFDakQsb0VBQWtFO0FBQ2xFLG1FQUE0RTtBQUM1RSxtRUFBaUQ7QUFDakQsMEVBQXdFO0FBQ3hFLDRGQUErRTtBQU0vRTtJQVFJLHlCQUFvQixRQUFrQixFQUNsQixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsY0FBOEI7UUFIOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFWMUMsa0JBQWEsR0FBRyxnQ0FBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFXL0MsSUFBSTtZQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywyQkFBaUIsQ0FBQyxDQUFBO1NBQzdEO1FBQUMsV0FBTSxHQUFHO0lBQ2YsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkcsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN0RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU87WUFDM0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVztZQUMxRixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBRXJFLElBQUksTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUN0QyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtnQkFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDdEYsSUFBSSxjQUFjLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ25DO1NBQ0Q7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQVlDO1FBWEEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2FBQ3BDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDWCxJQUFJLE1BQU0sRUFBRTtnQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUN2RCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQztxQkFDN0QsSUFBSSxDQUFDO29CQUNnQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUMxQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBOUMwQjtRQUExQixnQkFBUyxDQUFDLDBDQUFjLENBQUM7a0NBQWlCLDBDQUFjOzJEQUFDO0lBQ2pDO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzt3REFBa0I7SUFOakMsZUFBZTtRQUozQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FTZ0MsZUFBUTtZQUNDLHNDQUFpQjtZQUNwQixnQ0FBYztZQUNkLHVCQUFjO09BWHpDLGVBQWUsQ0FvRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmNvbnN0IG1ldGFkYXRhID0gcmVxdWlyZShcIi4vZnEtZm9ybS5tZXRhZGF0YS5qc29uXCIpO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrTmF2aWdhdGlvbiB9IGZyb20gXCIuLi9zaGFyZWQvZGlyZWN0aXZlcy9iYWNrLW5hdmlnYXRpb24uZGlyZWN0aXZlXCJcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZxLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBGcUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZGF0YVN0b3JlVHlwZSA9IEtpbnZleS5EYXRhU3RvcmVUeXBlLkNhY2hlO1xuICAgIHByaXZhdGUgbW9kYWxEaWFsb2dQYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zO1xuICAgIHB1YmxpYyBpdGVtOiBhbnk7XG4gICAgcHVibGljIG1ldGFkYXRhOiBhbnk7XG4gICAgQFZpZXdDaGlsZChCYWNrTmF2aWdhdGlvbikgYmFja05hdmlnYXRpb246IEJhY2tOYXZpZ2F0aW9uO1xuICAgIEBWaWV3Q2hpbGQoXCJmb3JtT2JqZWN0XCIpIHJhZERhdGFGb3JtOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICBcdHRoaXMubW9kYWxEaWFsb2dQYXJhbXMgPSB0aGlzLmluamVjdG9yLmdldChNb2RhbERpYWxvZ1BhcmFtcylcbiAgICAgICAgfSBjYXRjaCB7IH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gICAgICAgIGNvbnN0IGZvcmVpZ25LZXlOYW1lID0gdGhpcy5tb2RhbERpYWxvZ1BhcmFtcyAmJiB0aGlzLm1vZGFsRGlhbG9nUGFyYW1zLmNvbnRleHQgJiZcbiAgICAgICAgICAgIHRoaXMubW9kYWxEaWFsb2dQYXJhbXMuY29udGV4dC5wYXJhbXMgJiYgdGhpcy5tb2RhbERpYWxvZ1BhcmFtcy5jb250ZXh0LnBhcmFtcy5xdWVyeVBhcmFtcyAmJlxuICAgICAgICAgICAgdGhpcy5tb2RhbERpYWxvZ1BhcmFtcy5jb250ZXh0LnBhcmFtcy5xdWVyeVBhcmFtcy5mb3JlaWduS2V5TmFtZTtcblxuICAgICAgICBpZiAoaXRlbUlkICYmICFmb3JlaWduS2V5TmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyaWV2aW5nIGl0ZW0gZnJvbSBkYlwiKVxuICAgICAgICAgICAgS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKFwiY3VzdG9tZXJzXCIpLmZpbmRCeUlkKGl0ZW1JZCkuc3Vic2NyaWJlKGRiSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHJldHJpZXZlZCFcIilcbiAgICAgICAgXHRcdHRoaXMuaXRlbSA9IGRiSXRlbTtcbiAgICAgICAgXHR9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgXHR0aGlzLml0ZW0gPSB7IG5hbWU6IFwiXCIsIHNhbGFyeTogMCwgbG95YWw6IGZhbHNlLCBhZGRlZDogXCJcIiwgdXNlcm5hbWU6IFwiXCIsIHBob25lOiBcIlwiIH07XG4gICAgICAgIFx0aWYgKGZvcmVpZ25LZXlOYW1lKSB7XG4gICAgICAgIFx0XHR0aGlzLml0ZW1bZm9yZWlnbktleU5hbWVdID0gaXRlbUlkO1xuICAgICAgICBcdH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICB9XG5cbiAgICBzdWJtaXRGb3JtKCkge1xuICAgIFx0dGhpcy5yYWREYXRhRm9ybS5kYXRhRm9ybS52YWxpZGF0ZUFsbCgpXG4gICAgXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcbiAgICBcdFx0XHRcdGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgdG8gc2F2ZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrZW5kU2VydmljZS5zYXZlKFwiY3VzdG9tZXJzXCIsIHRoaXMuaXRlbSlcbiAgICBcdFx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWQhXCIpXG4gICAgXHRcdFx0XHRcdFx0XHR0aGlzLmJhY2tOYXZpZ2F0aW9uLmdvQmFjaygpO1xuICAgIFx0XHRcdFx0XHRcdH0pO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0pO1xuICAgIH1cbn1cbiJdfQ==