"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("platform");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.onTabViewLoaded = function (_a) {
        var tabView = _a.object;
        if (platform.isAndroid) {
            return;
        }
        tabView.eachChild(function (child) {
            var tabBarItem = child.__controller.tabBarItem;
            tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -11 };
        });
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            moduleId: module.id,
            templateUrl: "./tabs.component.html"
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxtQ0FBcUM7QUFPckM7SUFBQTtJQVdBLENBQUM7SUFWRyx1Q0FBZSxHQUFmLFVBQWdCLEVBQW1CO1lBQWpCLG1CQUFlO1FBQzdCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNwQixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUNqRCxVQUFVLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVZRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7T0FDVyxhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGFic1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90YWJzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCB7XG4gICAgb25UYWJWaWV3TG9hZGVkKHsgb2JqZWN0OiB0YWJWaWV3IH0pIHtcbiAgICAgICAgaWYgKHBsYXRmb3JtLmlzQW5kcm9pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFiVmlldy5lYWNoQ2hpbGQoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWJCYXJJdGVtID0gY2hpbGQuX19jb250cm9sbGVyLnRhYkJhckl0ZW07XG4gICAgICAgICAgICB0YWJCYXJJdGVtLnRpdGxlUG9zaXRpb25BZGp1c3RtZW50ID0geyBob3Jpem9udGFsOiAwLCB2ZXJ0aWNhbDogLTExIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=