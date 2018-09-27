import { Injectable, NgZone, ApplicationRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ExtendedNavigationExtras } from "nativescript-angular/router/router-extensions";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "../../core/navigation/modal.component";
import * as app from "tns-core-modules/application/application";

@Injectable()
export class NavigationService {
    private modalDialogPromise = null;

    constructor(private modalDialogService: ModalDialogService,
        private applicationRef: ApplicationRef,
        private zone: NgZone,
        private routerExtensions: RouterExtensions) {
    }

    navigateTo(path: string, extras?: ExtendedNavigationExtras) {
        if (this.isInsideModal()) {
            this.navigate([path], extras || {});
        } else {
            this.navigateToModal(path, extras);
        }
    }

    navigate(command: any[], extras: ExtendedNavigationExtras) {
        extras.animated = true;
        extras.transition = extras.transition || {
            name: "slide",
            duration: 200,
            curve: "ease"
        };

        this.zone.run(() => this.routerExtensions.navigate(command, extras));
    }

    navigateToModal(path: string, params?: any) {
        console.log("path", path)
        if (this.modalDialogPromise) {
            this.modalDialogPromise.then(() => this.navigateToModal(path, params));
            return;
        }

        const options: ModalDialogOptions = {
            context: {
                path,
                params

            },
            fullscreen: true,
            // Access root viewContainerRef
            // https://github.com/angular/angular/issues/6446#issuecomment-173459525
            viewContainerRef: this.applicationRef.components[0].instance.viewContainerRef
        };

        this.zone.run(() => {
            this.modalDialogPromise = this.modalDialogService
                .showModal(ModalComponent, options)
                .then(() => this.modalDialogPromise = null);
        });
    }

    goBack() {
        this.routerExtensions.back();
    }

    private isInsideModal() {
        const rootView = app.getRootView();
        return rootView && rootView.modal;
    }
}
