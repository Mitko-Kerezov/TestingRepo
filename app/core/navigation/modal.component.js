"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(routerExtensions, activatedRoute, params) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.params = params;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.routerExtensions.navigate(["/" + this.params.context.path], { relativeTo: this.activatedRoute });
    };
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            router_1.ActivatedRoute,
            modal_dialog_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtFQUFzRTtBQUN0RSwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBTS9EO0lBQ0Msd0JBQW9CLGdCQUFrQyxFQUMzQyxjQUE4QixFQUM5QixNQUF5QjtRQUZoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNwQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFSVyxjQUFjO1FBSjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsUUFBUSxFQUFFLDJDQUEyQztTQUNyRCxDQUFDO3lDQUVxQyx5QkFBZ0I7WUFDM0IsdUJBQWM7WUFDdEIsZ0NBQWlCO09BSHhCLGNBQWMsQ0FTMUI7SUFBRCxxQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlOiBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XCJcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG5cdFx0XHRcdHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdFx0XHRwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbYC8ke3RoaXMucGFyYW1zLmNvbnRleHQucGF0aH1gXSwgeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlIH0pO1xuXHR9XG59XG4iXX0=