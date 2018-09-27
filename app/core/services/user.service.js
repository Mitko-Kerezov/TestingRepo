"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var router_2 = require("nativescript-angular/router");
var backend_service_1 = require("./backend.service");
var navigation_service_1 = require("./navigation.service");
var UserService = /** @class */ (function () {
    function UserService(backendService, navigationService, routerExtensions) {
        this.backendService = backendService;
        this.navigationService = navigationService;
        this.routerExtensions = routerExtensions;
        this.lastRoute = "";
        this.onLoggedInChangedSubject = new rxjs_1.ReplaySubject(1);
        this.backendService.setLoggedInChangedObservable(this.onLoggedInChanged);
        this.updateIsLoggedInPromise();
        this.resetHistoryAfterLogin();
    }
    Object.defineProperty(UserService.prototype, "isLoggedInStatus", {
        get: function () {
            return !!this.backendService.getActiveUser();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "onLoggedInChanged", {
        get: function () {
            return this.onLoggedInChangedSubject
                .asObservable()
                .pipe(operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.register = function (user) {
        var _this = this;
        var registerPromise = this.logout()
            .then(function () { return _this.backendService.signup(user.username, user.password); });
        registerPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(registerPromise);
        return registerPromise;
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var loginPromise = this.logout()
            .then(function () { return _this.backendService.login(user.username, user.password); });
        loginPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(loginPromise);
        return loginPromise;
    };
    UserService.prototype.loginWithMIC = function (redirectUri, authorizationGrant, options) {
        var _this = this;
        var loginPromise = this.logout()
            .then(function () { return _this.backendService.loginWithMIC(redirectUri, authorizationGrant, options); });
        loginPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(loginPromise);
        return loginPromise;
    };
    UserService.prototype.logout = function () {
        var logoutPromise = this.backendService.logout();
        this.updateIsLoggedInPromise(logoutPromise);
        return logoutPromise;
    };
    UserService.prototype.resetPassword = function (email) {
        var resetPasswordPromise = this.backendService.resetPassword(email);
        resetPasswordPromise.catch(this.handleErrors);
        return resetPasswordPromise;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(error.toString());
    };
    UserService.prototype.updateIsLoggedInPromise = function (pendingPromise) {
        var _this = this;
        if (!pendingPromise) {
            this.isLoggedIn = Promise.resolve(this.isLoggedInStatus);
            this.onLoggedInChangedSubject.next(this.isLoggedInStatus);
            return;
        }
        this.isLoggedIn = pendingPromise
            .catch()
            .then(function () {
            _this.onLoggedInChangedSubject.next(_this.isLoggedInStatus);
            return _this.isLoggedInStatus;
        });
    };
    UserService.prototype.resetHistoryAfterLogin = function () {
        var _this = this;
        this.routerExtensions.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function () {
            if (_this.lastRoute.startsWith("/login/login")) {
                _this.navigationService.navigate([""], { clearHistory: true });
            }
            _this.lastRoute = _this.routerExtensions.router.url;
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            navigation_service_1.NavigationService,
            router_2.RouterExtensions])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUFnRDtBQUNoRCw2QkFBcUM7QUFDckMsNENBQThEO0FBQzlELHNEQUErRDtBQUcvRCxxREFBbUQ7QUFFbkQsMkRBQXlEO0FBR3pEO0lBZ0JJLHFCQUFvQixjQUE4QixFQUN0QyxpQkFBb0MsRUFDcEMsZ0JBQWtDO1FBRjFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN0QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoQnRDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFpQjNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLG9CQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBbEJELHNCQUFZLHlDQUFnQjthQUE1QjtZQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBaUI7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyx3QkFBd0I7aUJBQy9CLFlBQVksRUFBRTtpQkFDZCxJQUFJLENBQUMsZ0NBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBWUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBUUM7UUFQRyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ2hDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQXhELENBQXdELENBQUMsQ0FBQztRQUUxRSxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFOUMsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQVFDO1FBUEcsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTthQUM3QixJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUF2RCxDQUF1RCxDQUFDLENBQUM7UUFFekUsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTNDLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsV0FBbUIsRUFBRSxrQkFBOEMsRUFBRSxPQUErQjtRQUFqSCxpQkFRQztRQVBHLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7YUFDN0IsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLEVBQTFFLENBQTBFLENBQUMsQ0FBQztRQUU1RixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFM0MsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1QyxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEtBQUs7UUFDZixJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRFLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFOUMsT0FBTyxvQkFBb0IsQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQUs7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyw2Q0FBdUIsR0FBL0IsVUFBZ0MsY0FBNkI7UUFBN0QsaUJBYUM7UUFaRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYzthQUMzQixLQUFLLEVBQUU7YUFDUCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFELE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLDRDQUFzQixHQUE5QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQzlCLElBQUksQ0FBQyxrQkFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUMsQ0FBQzthQUN2RCxTQUFTLENBQUM7WUFDUCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUMzQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNqRTtZQUVELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBcEdRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FpQjJCLGdDQUFjO1lBQ25CLHNDQUFpQjtZQUNsQix5QkFBZ0I7T0FsQnJDLFdBQVcsQ0FxR3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJHRCxJQXFHQztBQXJHWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIG9uTG9nZ2VkSW5DaGFuZ2VkU3ViamVjdDogUmVwbGF5U3ViamVjdDxib29sZWFuPjtcbiAgICBwcml2YXRlIGxhc3RSb3V0ZTogc3RyaW5nID0gXCJcIjtcblxuICAgIGlzTG9nZ2VkSW46IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICBwcml2YXRlIGdldCBpc0xvZ2dlZEluU3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmJhY2tlbmRTZXJ2aWNlLmdldEFjdGl2ZVVzZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgb25Mb2dnZWRJbkNoYW5nZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uTG9nZ2VkSW5DaGFuZ2VkU3ViamVjdFxuICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLm9uTG9nZ2VkSW5DaGFuZ2VkU3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgICAgICB0aGlzLmJhY2tlbmRTZXJ2aWNlLnNldExvZ2dlZEluQ2hhbmdlZE9ic2VydmFibGUodGhpcy5vbkxvZ2dlZEluQ2hhbmdlZCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVJc0xvZ2dlZEluUHJvbWlzZSgpO1xuICAgICAgICB0aGlzLnJlc2V0SGlzdG9yeUFmdGVyTG9naW4oKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyUHJvbWlzZSA9IHRoaXMubG9nb3V0KClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuYmFja2VuZFNlcnZpY2Uuc2lnbnVwKHVzZXIudXNlcm5hbWUsIHVzZXIucGFzc3dvcmQpKTtcblxuICAgICAgICByZWdpc3RlclByb21pc2UuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgIHRoaXMudXBkYXRlSXNMb2dnZWRJblByb21pc2UocmVnaXN0ZXJQcm9taXNlKTtcblxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJQcm9taXNlO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgY29uc3QgbG9naW5Qcm9taXNlID0gdGhpcy5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5iYWNrZW5kU2VydmljZS5sb2dpbih1c2VyLnVzZXJuYW1lLCB1c2VyLnBhc3N3b3JkKSk7XG5cbiAgICAgICAgbG9naW5Qcm9taXNlLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAgICAgdGhpcy51cGRhdGVJc0xvZ2dlZEluUHJvbWlzZShsb2dpblByb21pc2UpO1xuXG4gICAgICAgIHJldHVybiBsb2dpblByb21pc2U7XG4gICAgfVxuXG4gICAgbG9naW5XaXRoTUlDKHJlZGlyZWN0VXJpOiBzdHJpbmcsIGF1dGhvcml6YXRpb25HcmFudD86IEtpbnZleS5BdXRob3JpemF0aW9uR3JhbnQsIG9wdGlvbnM/OiBLaW52ZXkuUmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbG9naW5Qcm9taXNlID0gdGhpcy5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5iYWNrZW5kU2VydmljZS5sb2dpbldpdGhNSUMocmVkaXJlY3RVcmksIGF1dGhvcml6YXRpb25HcmFudCwgb3B0aW9ucykpO1xuXG4gICAgICAgIGxvZ2luUHJvbWlzZS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgICAgIHRoaXMudXBkYXRlSXNMb2dnZWRJblByb21pc2UobG9naW5Qcm9taXNlKTtcblxuICAgICAgICByZXR1cm4gbG9naW5Qcm9taXNlO1xuICAgIH1cblxuICAgIGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgbG9nb3V0UHJvbWlzZSA9IHRoaXMuYmFja2VuZFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlSXNMb2dnZWRJblByb21pc2UobG9nb3V0UHJvbWlzZSk7XG5cbiAgICAgICAgcmV0dXJuIGxvZ291dFByb21pc2U7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICBjb25zdCByZXNldFBhc3N3b3JkUHJvbWlzZSA9IHRoaXMuYmFja2VuZFNlcnZpY2UucmVzZXRQYXNzd29yZChlbWFpbCk7XG5cbiAgICAgICAgcmVzZXRQYXNzd29yZFByb21pc2UuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuXG4gICAgICAgIHJldHVybiByZXNldFBhc3N3b3JkUHJvbWlzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJc0xvZ2dlZEluUHJvbWlzZShwZW5kaW5nUHJvbWlzZT86IFByb21pc2U8YW55Pikge1xuICAgICAgICBpZiAoIXBlbmRpbmdQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBQcm9taXNlLnJlc29sdmUodGhpcy5pc0xvZ2dlZEluU3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMub25Mb2dnZWRJbkNoYW5nZWRTdWJqZWN0Lm5leHQodGhpcy5pc0xvZ2dlZEluU3RhdHVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHBlbmRpbmdQcm9taXNlXG4gICAgICAgICAgICAuY2F0Y2goKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Mb2dnZWRJbkNoYW5nZWRTdWJqZWN0Lm5leHQodGhpcy5pc0xvZ2dlZEluU3RhdHVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xvZ2dlZEluU3RhdHVzO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEhpc3RvcnlBZnRlckxvZ2luKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLmV2ZW50c1xuICAgICAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RSb3V0ZS5zdGFydHNXaXRoKFwiL2xvZ2luL2xvZ2luXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoW1wiXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RSb3V0ZSA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19