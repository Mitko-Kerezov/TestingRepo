"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var user_model_1 = require("../core/models/user.model");
var helpers_service_1 = require("../core/services/helpers.service");
var user_service_1 = require("../core/services/user.service");
var AnonymousLoginComponent = /** @class */ (function () {
    function AnonymousLoginComponent(helpersService, userService, params) {
        this.helpersService = helpersService;
        this.userService = userService;
        this.params = params;
    }
    AnonymousLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helpersService.addAndroidBackPressedHandler();
        var user = new user_model_1.User();
        user.password = "";
        user.username = "";
        this.userService.register(user).then(function () { return _this.params.closeCallback(); });
    };
    AnonymousLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./anonymous-login.component.html"
        }),
        __metadata("design:paramtypes", [helpers_service_1.HelpersService,
            user_service_1.UserService,
            dialogs_1.ModalDialogParams])
    ], AnonymousLoginComponent);
    return AnonymousLoginComponent;
}());
exports.AnonymousLoginComponent = AnonymousLoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWxvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFub255bW91cy1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBRTVFLHdEQUFpRDtBQUNqRCxvRUFBa0U7QUFDbEUsOERBQTREO0FBTTVEO0lBQ0ksaUNBQW9CLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLE1BQXlCO1FBRnpCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUM3QyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBRW5ELElBQU0sSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBRWxCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFkUSx1QkFBdUI7UUFKbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7eUNBRXNDLGdDQUFjO1lBQ2pCLDBCQUFXO1lBQ2hCLDJCQUFpQjtPQUhwQyx1QkFBdUIsQ0FlbkM7SUFBRCw4QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL2NvcmUvbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvc2VydmljZXMvaGVscGVycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYW5vbnltb3VzLWxvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVscGVyc1NlcnZpY2U6IEhlbHBlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhlbHBlcnNTZXJ2aWNlLmFkZEFuZHJvaWRCYWNrUHJlc3NlZEhhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdXNlci5wYXNzd29yZCA9IFwiXCI7XG4gICAgICAgIHVzZXIudXNlcm5hbWUgPSBcIlwiXG5cbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih1c2VyKS50aGVuKCgpID0+IHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKSk7XG4gICAgfVxufVxuIl19