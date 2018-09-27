"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var navigation_service_1 = require("../services/navigation.service");
var SideDrawerItemsComponent = /** @class */ (function () {
    function SideDrawerItemsComponent(navigationService) {
        this.navigationService = navigationService;
    }
    SideDrawerItemsComponent.prototype.open = function (path) {
        app.getRootView().closeDrawer();
        this.navigationService.navigateToModal(path);
    };
    SideDrawerItemsComponent = __decorate([
        core_1.Component({
            selector: "side-drawer-items",
            moduleId: module.id,
            templateUrl: "./side-drawer-items.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService])
    ], SideDrawerItemsComponent);
    return SideDrawerItemsComponent;
}());
exports.SideDrawerItemsComponent = SideDrawerItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1kcmF3ZXItaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGlDQUFtQztBQUNuQyxxRUFBbUU7QUFPbkU7SUFDQyxrQ0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQztJQUVELHVDQUFJLEdBQUosVUFBSyxJQUFZO1FBQ0EsR0FBRyxDQUFDLFdBQVcsRUFBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQVBXLHdCQUF3QjtRQUxwQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLG1CQUFtQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLG9DQUFvQztTQUNqRCxDQUFDO3lDQUVzQyxzQ0FBaUI7T0FENUMsd0JBQXdCLENBUXBDO0lBQUQsK0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJzaWRlLWRyYXdlci1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vc2lkZS1kcmF3ZXItaXRlbXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VySXRlbXNDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSkge1xuXHR9XG5cblx0b3BlbihwYXRoOiBzdHJpbmcpOiB2b2lkIHtcblx0XHQoPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCkpLmNsb3NlRHJhd2VyKCk7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvTW9kYWwocGF0aCk7XG5cdH1cbn0iXX0=