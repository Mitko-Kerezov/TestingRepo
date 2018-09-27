"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page/page");
var ShowNavBarDirective = /** @class */ (function () {
    function ShowNavBarDirective(page) {
        this.page = page;
    }
    ShowNavBarDirective.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
    };
    ShowNavBarDirective = __decorate([
        core_1.Directive({
            selector: "[showNavBar]"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ShowNavBarDirective);
    return ShowNavBarDirective;
}());
exports.ShowNavBarDirective = ShowNavBarDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1uYXYtYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3ctbmF2LWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUNBQW9DO0FBS3BDO0lBQ0ksNkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFOUSxtQkFBbUI7UUFIL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1NBQzNCLENBQUM7eUNBRTRCLFdBQUk7T0FEckIsbUJBQW1CLENBTy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2UvcGFnZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc2hvd05hdkJhcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTaG93TmF2QmFyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbn0iXX0=