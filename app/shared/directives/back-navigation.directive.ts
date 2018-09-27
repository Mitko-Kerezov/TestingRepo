import { Directive, Injector, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { ActionItem, NavigationButton } from "tns-core-modules/ui/action-bar/action-bar";
import { ActivatedRoute } from "@angular/router";
import { path } from "tns-core-modules/file-system/file-system";
import * as app from "tns-core-modules/application/application";

import { NavigationService } from "../../core/services/navigation.service";

@Directive({
    selector: "[backNavigation]",
})
export class BackNavigation implements OnInit {
    private static backBtnId: string = "backBtn"
    private modalDialogParams: ModalDialogParams;

    constructor(private injector: Injector,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService, ) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = false;
        this.addNavButton();
    }

    goBack() {
        if (this.routerExtensions.canGoBackToPreviousPage()) {
            this.routerExtensions.backToPreviousPage();
        } else {
            if (this.isInsideModalDialog()) {
                this.modalDialogParams.closeCallback();
            } else if (this.routerExtensions.canGoBack()) {
                this.activatedRoute.params.subscribe(params => {
                    const backPath = "..";
                    let navigationPath = backPath;
                    for (const key in params) {
                        if (params.hasOwnProperty(key)) {
                            navigationPath = path.join(navigationPath, backPath);
                        }
                    }

                    this.navigationService.navigate([navigationPath], { relativeTo: this.activatedRoute });
                });
            }
        }
    }

    private isInsideModalDialog() {
        try {
            // ModalDialogParams will resolve if inside a modal dialog
            this.modalDialogParams = this.injector.get(ModalDialogParams)
            return true;
        } catch (e) {
            return false;
        }
    }

    private addNavButton() {
        if (this.isInsideModalDialog() || this.activatedRoute.snapshot.url.some(x => x.path.endsWith("-details"))) {
            const navBtn = new NavigationButton();
            navBtn.on("tap", () => this.goBack());
            if (app.android) {
                navBtn.android.systemIcon = "ic_menu_back";
            }

            this.page.actionBar.navigationButton = navBtn
            if (app.ios) {
                this.page.actionBar.navigationButton.visibility = "collapsed";
                const backButton = new ActionItem();
                backButton.on("tap", () => this.goBack());
                backButton.id = BackNavigation.backBtnId;
                backButton.ios.systemIcon = 8;
                this.page.actionBar.actionItems.addItem(backButton);
            }
        } else {
            if (app.android && this.page.actionBar.navigationButton) {
                this.page.actionBar.navigationButton.visibility = "collapsed";
            } else {
                const actionItem = this.page.actionBar.actionItems.getItems().find(i => i.id === BackNavigation.backBtnId);
                if (actionItem) {
                    this.page.actionBar.actionItems.removeItem(actionItem);
                }
            }
        }
    }
}
