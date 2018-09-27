"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var frame = require("ui/frame/frame");
var app = require("application/application");
var HelpersService = /** @class */ (function () {
    function HelpersService() {
    }
    HelpersService.prototype.addAndroidBackPressedHandler = function () {
        if (!app.android) {
            return;
        }
        this.removeAndroidBackPressedHandler();
        frame.topmost().on("activityBackPressed", this.onAndroidBackPressed);
    };
    HelpersService.prototype.removeAndroidBackPressedHandler = function () {
        if (!app.android) {
            return;
        }
        frame.topmost().off("activityBackPressed", this.onAndroidBackPressed);
    };
    HelpersService.prototype.onAndroidBackPressed = function (args) {
        args.cancel = true;
        app.android.foregroundActivity.moveTaskToBack(true);
    };
    HelpersService = __decorate([
        core_1.Injectable()
    ], HelpersService);
    return HelpersService;
}());
exports.HelpersService = HelpersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3QztBQUN4Qyw2Q0FBK0M7QUFHL0M7SUFBQTtJQXNCQSxDQUFDO0lBckJHLHFEQUE0QixHQUE1QjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7UUFDdkMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsd0RBQStCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFPO1NBQ1Y7UUFFRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTyw2Q0FBb0IsR0FBNUIsVUFBNkIsSUFBUztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBckJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSBcInVpL2ZyYW1lL2ZyYW1lXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uL2FwcGxpY2F0aW9uXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWxwZXJzU2VydmljZSB7XG4gICAgYWRkQW5kcm9pZEJhY2tQcmVzc2VkSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKCFhcHAuYW5kcm9pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1vdmVBbmRyb2lkQmFja1ByZXNzZWRIYW5kbGVyKCk7XG4gICAgICAgIGZyYW1lLnRvcG1vc3QoKS5vbihcImFjdGl2aXR5QmFja1ByZXNzZWRcIiwgdGhpcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQW5kcm9pZEJhY2tQcmVzc2VkSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKCFhcHAuYW5kcm9pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZnJhbWUudG9wbW9zdCgpLm9mZihcImFjdGl2aXR5QmFja1ByZXNzZWRcIiwgdGhpcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkFuZHJvaWRCYWNrUHJlc3NlZChhcmdzOiBhbnkpIHtcbiAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xuICAgICAgICBhcHAuYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkubW92ZVRhc2tUb0JhY2sodHJ1ZSk7XG4gICAgfVxufVxuIl19