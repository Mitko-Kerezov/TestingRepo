"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var LoggedInLazyLoadGuard = /** @class */ (function () {
    function LoggedInLazyLoadGuard(userService) {
        this.userService = userService;
    }
    LoggedInLazyLoadGuard.prototype.canLoad = function () {
        return this.userService.isLoggedIn;
    };
    LoggedInLazyLoadGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], LoggedInLazyLoadGuard);
    return LoggedInLazyLoadGuard;
}());
exports.LoggedInLazyLoadGuard = LoggedInLazyLoadGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBR3ZEO0lBQ0ksK0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzVDLENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBTlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBRXdCLDBCQUFXO09BRG5DLHFCQUFxQixDQU9qQztJQUFELDRCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYW5Mb2FkIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZWRJbkxhenlMb2FkR3VhcmQgaW1wbGVtZW50cyBDYW5Mb2FkIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIH1cblxuICAgIGNhbkxvYWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW47XG4gICAgfVxufSJdfQ==