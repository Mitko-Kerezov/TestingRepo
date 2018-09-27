"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var action_bar_1 = require("tns-core-modules/ui/action-bar/action-bar");
var router_2 = require("@angular/router");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var app = require("tns-core-modules/application/application");
var navigation_service_1 = require("../../core/services/navigation.service");
var BackNavigation = /** @class */ (function () {
    function BackNavigation(injector, routerExtensions, page, activatedRoute, navigationService) {
        this.injector = injector;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.activatedRoute = activatedRoute;
        this.navigationService = navigationService;
    }
    BackNavigation_1 = BackNavigation;
    BackNavigation.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        this.addNavButton();
    };
    BackNavigation.prototype.goBack = function () {
        var _this = this;
        if (this.routerExtensions.canGoBackToPreviousPage()) {
            this.routerExtensions.backToPreviousPage();
        }
        else {
            if (this.isInsideModalDialog()) {
                this.modalDialogParams.closeCallback();
            }
            else if (this.routerExtensions.canGoBack()) {
                this.activatedRoute.params.subscribe(function (params) {
                    var backPath = "..";
                    var navigationPath = backPath;
                    for (var key in params) {
                        if (params.hasOwnProperty(key)) {
                            navigationPath = file_system_1.path.join(navigationPath, backPath);
                        }
                    }
                    _this.navigationService.navigate([navigationPath], { relativeTo: _this.activatedRoute });
                });
            }
        }
    };
    BackNavigation.prototype.isInsideModalDialog = function () {
        try {
            // ModalDialogParams will resolve if inside a modal dialog
            this.modalDialogParams = this.injector.get(modal_dialog_1.ModalDialogParams);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    BackNavigation.prototype.addNavButton = function () {
        var _this = this;
        if (this.isInsideModalDialog() || this.activatedRoute.snapshot.url.some(function (x) { return x.path.endsWith("-details"); })) {
            var navBtn = new action_bar_1.NavigationButton();
            navBtn.on("tap", function () { return _this.goBack(); });
            if (app.android) {
                navBtn.android.systemIcon = "ic_menu_back";
            }
            this.page.actionBar.navigationButton = navBtn;
            if (app.ios) {
                this.page.actionBar.navigationButton.visibility = "collapsed";
                var backButton = new action_bar_1.ActionItem();
                backButton.on("tap", function () { return _this.goBack(); });
                backButton.id = BackNavigation_1.backBtnId;
                backButton.ios.systemIcon = 8;
                this.page.actionBar.actionItems.addItem(backButton);
            }
        }
        else {
            if (app.android && this.page.actionBar.navigationButton) {
                this.page.actionBar.navigationButton.visibility = "collapsed";
            }
            else {
                var actionItem = this.page.actionBar.actionItems.getItems().find(function (i) { return i.id === BackNavigation_1.backBtnId; });
                if (actionItem) {
                    this.page.actionBar.actionItems.removeItem(actionItem);
                }
            }
        }
    };
    var BackNavigation_1;
    BackNavigation.backBtnId = "backBtn";
    BackNavigation = BackNavigation_1 = __decorate([
        core_1.Directive({
            selector: "[backNavigation]",
        }),
        __metadata("design:paramtypes", [core_1.Injector,
            router_1.RouterExtensions,
            page_1.Page,
            router_2.ActivatedRoute,
            navigation_service_1.NavigationService])
    ], BackNavigation);
    return BackNavigation;
}());
exports.BackNavigation = BackNavigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uYXZpZ2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2stbmF2aWdhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQXNFO0FBQ3RFLHNEQUErRDtBQUMvRCxzREFBcUQ7QUFDckQsd0VBQXlGO0FBQ3pGLDBDQUFpRDtBQUNqRCx3RUFBZ0U7QUFDaEUsOERBQWdFO0FBRWhFLDZFQUEyRTtBQUszRTtJQUlJLHdCQUFvQixRQUFrQixFQUMxQixnQkFBa0MsRUFDbEMsSUFBVSxFQUNWLGNBQThCLEVBQzlCLGlCQUFvQztRQUo1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ2hELENBQUM7dUJBVFEsY0FBYztJQVd2QixpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzlDO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNB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QUU7b0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDMUQ7YUFDSjtTQUNKO0lBQ0wsQ0FBQzs7SUExRWMsd0JBQVMsR0FBVyxTQUFTLENBQUE7SUFEbkMsY0FBYztRQUgxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtTQUMvQixDQUFDO3lDQUtnQyxlQUFRO1lBQ1IseUJBQWdCO1lBQzVCLFdBQUk7WUFDTSx1QkFBYztZQUNYLHNDQUFpQjtPQVJ2QyxjQUFjLENBNEUxQjtJQUFELHFCQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdG9yLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSwgTmF2aWdhdGlvbkJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhclwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBwYXRoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb3JlL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbYmFja05hdmlnYXRpb25dXCIsXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tOYXZpZ2F0aW9uIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBiYWNrQnRuSWQ6IHN0cmluZyA9IFwiYmFja0J0blwiXG4gICAgcHJpdmF0ZSBtb2RhbERpYWxvZ1BhcmFtczogTW9kYWxEaWFsb2dQYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGROYXZCdXR0b24oKTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlckV4dGVuc2lvbnMuY2FuR29CYWNrVG9QcmV2aW91c1BhZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnNpZGVNb2RhbERpYWxvZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbERpYWxvZ1BhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm91dGVyRXh0ZW5zaW9ucy5jYW5Hb0JhY2soKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrUGF0aCA9IFwiLi5cIjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25QYXRoID0gYmFja1BhdGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblBhdGggPSBwYXRoLmpvaW4obmF2aWdhdGlvblBhdGgsIGJhY2tQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoW25hdmlnYXRpb25QYXRoXSwgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0luc2lkZU1vZGFsRGlhbG9nKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTW9kYWxEaWFsb2dQYXJhbXMgd2lsbCByZXNvbHZlIGlmIGluc2lkZSBhIG1vZGFsIGRpYWxvZ1xuICAgICAgICAgICAgdGhpcy5tb2RhbERpYWxvZ1BhcmFtcyA9IHRoaXMuaW5qZWN0b3IuZ2V0KE1vZGFsRGlhbG9nUGFyYW1zKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTmF2QnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc0luc2lkZU1vZGFsRGlhbG9nKCkgfHwgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwuc29tZSh4ID0+IHgucGF0aC5lbmRzV2l0aChcIi1kZXRhaWxzXCIpKSkge1xuICAgICAgICAgICAgY29uc3QgbmF2QnRuID0gbmV3IE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICAgICAgICAgIG5hdkJ0bi5vbihcInRhcFwiLCAoKSA9PiB0aGlzLmdvQmFjaygpKTtcbiAgICAgICAgICAgIGlmIChhcHAuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIG5hdkJ0bi5hbmRyb2lkLnN5c3RlbUljb24gPSBcImljX21lbnVfYmFja1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSBuYXZCdG5cbiAgICAgICAgICAgIGlmIChhcHAuaW9zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlZFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBuZXcgQWN0aW9uSXRlbSgpO1xuICAgICAgICAgICAgICAgIGJhY2tCdXR0b24ub24oXCJ0YXBcIiwgKCkgPT4gdGhpcy5nb0JhY2soKSk7XG4gICAgICAgICAgICAgICAgYmFja0J1dHRvbi5pZCA9IEJhY2tOYXZpZ2F0aW9uLmJhY2tCdG5JZDtcbiAgICAgICAgICAgICAgICBiYWNrQnV0dG9uLmlvcy5zeXN0ZW1JY29uID0gODtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLmFkZEl0ZW0oYmFja0J1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXBwLmFuZHJvaWQgJiYgdGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlZFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25JdGVtID0gdGhpcy5wYWdlLmFjdGlvbkJhci5hY3Rpb25JdGVtcy5nZXRJdGVtcygpLmZpbmQoaSA9PiBpLmlkID09PSBCYWNrTmF2aWdhdGlvbi5iYWNrQnRuSWQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25JdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIuYWN0aW9uSXRlbXMucmVtb3ZlSXRlbShhY3Rpb25JdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=