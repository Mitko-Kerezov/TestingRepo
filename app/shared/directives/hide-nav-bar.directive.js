"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page/page");
var HideNavBarDirective = /** @class */ (function () {
    function HideNavBarDirective(page) {
        this.page = page;
    }
    HideNavBarDirective.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    HideNavBarDirective = __decorate([
        core_1.Directive({
            selector: "[hideNavBar]"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HideNavBarDirective);
    return HideNavBarDirective;
}());
exports.HideNavBarDirective = HideNavBarDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS1uYXYtYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpZGUtbmF2LWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUNBQW9DO0FBS3BDO0lBQ0ksNkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFOUSxtQkFBbUI7UUFIL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1NBQzNCLENBQUM7eUNBRTRCLFdBQUk7T0FEckIsbUJBQW1CLENBTy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2UvcGFnZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbaGlkZU5hdkJhcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBIaWRlTmF2QmFyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxufSJdfQ==