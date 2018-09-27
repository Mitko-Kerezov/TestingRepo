"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_component_1 = require("../../core/navigation/modal.component");
var app = require("tns-core-modules/application/application");
var NavigationService = /** @class */ (function () {
    function NavigationService(modalDialogService, applicationRef, zone, routerExtensions) {
        this.modalDialogService = modalDialogService;
        this.applicationRef = applicationRef;
        this.zone = zone;
        this.routerExtensions = routerExtensions;
        this.modalDialogPromise = null;
    }
    NavigationService.prototype.navigateTo = function (path, extras) {
        if (this.isInsideModal()) {
            this.navigate([path], extras || {});
        }
        else {
            this.navigateToModal(path, extras);
        }
    };
    NavigationService.prototype.navigate = function (command, extras) {
        var _this = this;
        extras.animated = true;
        extras.transition = extras.transition || {
            name: "slide",
            duration: 200,
            curve: "ease"
        };
        this.zone.run(function () { return _this.routerExtensions.navigate(command, extras); });
    };
    NavigationService.prototype.navigateToModal = function (path, params) {
        var _this = this;
        console.log("path", path);
        if (this.modalDialogPromise) {
            this.modalDialogPromise.then(function () { return _this.navigateToModal(path, params); });
            return;
        }
        var options = {
            context: {
                path: path,
                params: params
            },
            fullscreen: true,
            // Access root viewContainerRef
            // https://github.com/angular/angular/issues/6446#issuecomment-173459525
            viewContainerRef: this.applicationRef.components[0].instance.viewContainerRef
        };
        this.zone.run(function () {
            _this.modalDialogPromise = _this.modalDialogService
                .showModal(modal_component_1.ModalComponent, options)
                .then(function () { return _this.modalDialogPromise = null; });
        });
    };
    NavigationService.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    NavigationService.prototype.isInsideModal = function () {
        var rootView = app.getRootView();
        return rootView && rootView.modal;
    };
    NavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ApplicationRef,
            core_1.NgZone,
            router_1.RouterExtensions])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLHNEQUErRDtBQUUvRCxrRUFBMkY7QUFDM0YseUVBQXVFO0FBQ3ZFLDhEQUFnRTtBQUdoRTtJQUdJLDJCQUFvQixrQkFBc0MsRUFDOUMsY0FBOEIsRUFDOUIsSUFBWSxFQUNaLGdCQUFrQztRQUgxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQzlDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUx0Qyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFNbEMsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsTUFBaUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLE9BQWMsRUFBRSxNQUFnQztRQUF6RCxpQkFTQztRQVJHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSTtZQUNyQyxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLE1BQU07U0FDaEIsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxNQUFZO1FBQTFDLGlCQXdCQztRQXZCRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU87U0FDVjtRQUVELElBQU0sT0FBTyxHQUF1QjtZQUNoQyxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxNQUFBO2dCQUNKLE1BQU0sUUFBQTthQUVUO1lBQ0QsVUFBVSxFQUFFLElBQUk7WUFDaEIsK0JBQStCO1lBQy9CLHdFQUF3RTtZQUN4RSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCO1NBQ2hGLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsa0JBQWtCO2lCQUM1QyxTQUFTLENBQUMsZ0NBQWMsRUFBRSxPQUFPLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVPLHlDQUFhLEdBQXJCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQTdEUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FJK0IsaUNBQWtCO1lBQzlCLHFCQUFjO1lBQ3hCLGFBQU07WUFDTSx5QkFBZ0I7T0FOckMsaUJBQWlCLENBOEQ3QjtJQUFELHdCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBBcHBsaWNhdGlvblJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb3JlL25hdmlnYXRpb24vbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb25cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIG1vZGFsRGlhbG9nUHJvbWlzZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsRGlhbG9nU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG8ocGF0aDogc3RyaW5nLCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnNpZGVNb2RhbCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFtwYXRoXSwgZXh0cmFzIHx8IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb01vZGFsKHBhdGgsIGV4dHJhcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShjb21tYW5kOiBhbnlbXSwgZXh0cmFzOiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpIHtcbiAgICAgICAgZXh0cmFzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgZXh0cmFzLnRyYW5zaXRpb24gPSBleHRyYXMudHJhbnNpdGlvbiB8fCB7XG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoY29tbWFuZCwgZXh0cmFzKSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb01vZGFsKHBhdGg6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGF0aFwiLCBwYXRoKVxuICAgICAgICBpZiAodGhpcy5tb2RhbERpYWxvZ1Byb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxEaWFsb2dQcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5uYXZpZ2F0ZVRvTW9kYWwocGF0aCwgcGFyYW1zKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBwYXJhbXNcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICAvLyBBY2Nlc3Mgcm9vdCB2aWV3Q29udGFpbmVyUmVmXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy82NDQ2I2lzc3VlY29tbWVudC0xNzM0NTk1MjVcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuYXBwbGljYXRpb25SZWYuY29tcG9uZW50c1swXS5pbnN0YW5jZS52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsRGlhbG9nUHJvbWlzZSA9IHRoaXMubW9kYWxEaWFsb2dTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm1vZGFsRGlhbG9nUHJvbWlzZSA9IG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0luc2lkZU1vZGFsKCkge1xuICAgICAgICBjb25zdCByb290VmlldyA9IGFwcC5nZXRSb290VmlldygpO1xuICAgICAgICByZXR1cm4gcm9vdFZpZXcgJiYgcm9vdFZpZXcubW9kYWw7XG4gICAgfVxufVxuIl19