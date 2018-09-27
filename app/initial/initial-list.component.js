"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../core/services/backend.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var InitialListComponent = /** @class */ (function () {
    function InitialListComponent(backendService) {
        this.backendService = backendService;
        this.dataStoreType = kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache;
    }
    InitialListComponent.prototype.ngOnInit = function () {
        // Uncomment the following line if you want to retrieve all items from the "emptyCollection" collection
        // this.myItems = this.backendService.find("emptyCollection", this.dataStoreType);
    };
    InitialListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./initial-list.component.html"
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService])
    ], InitialListComponent);
    return InitialListComponent;
}());
exports.InitialListComponent = InitialListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXRpYWwtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsb0VBQWtFO0FBQ2xFLG1FQUFpRDtBQU1qRDtJQUtJLDhCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKMUMsa0JBQWEsR0FBRyxnQ0FBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFLbkQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSx1R0FBdUc7UUFDdkcsa0ZBQWtGO0lBQ3RGLENBQUM7SUFYUSxvQkFBb0I7UUFKaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBTXNDLGdDQUFjO09BTHpDLG9CQUFvQixDQVloQztJQUFELDJCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pbml0aWFsLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBJbml0aWFsTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBkYXRhU3RvcmVUeXBlID0gS2ludmV5LkRhdGFTdG9yZVR5cGUuQ2FjaGU7XG4gICAgXG4gICAgcHVibGljIG15SXRlbXM6IE9ic2VydmFibGU8YW55W10+O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlKSB7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lIGlmIHlvdSB3YW50IHRvIHJldHJpZXZlIGFsbCBpdGVtcyBmcm9tIHRoZSBcImVtcHR5Q29sbGVjdGlvblwiIGNvbGxlY3Rpb25cbiAgICAgICAgLy8gdGhpcy5teUl0ZW1zID0gdGhpcy5iYWNrZW5kU2VydmljZS5maW5kKFwiZW1wdHlDb2xsZWN0aW9uXCIsIHRoaXMuZGF0YVN0b3JlVHlwZSk7XG4gICAgfVxufVxuIl19