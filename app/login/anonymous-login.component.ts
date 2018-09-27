import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

import { User } from "../core/models/user.model";
import { HelpersService } from "../core/services/helpers.service";
import { UserService } from "../core/services/user.service";

@Component({
    moduleId: module.id,
    templateUrl: "./anonymous-login.component.html"
})
export class AnonymousLoginComponent implements OnInit {
    constructor(private helpersService: HelpersService,
                private userService: UserService,
                private params: ModalDialogParams) {
    }

    ngOnInit(): void {
        this.helpersService.addAndroidBackPressedHandler();

        const user = new User();
        user.password = "";
        user.username = ""

        this.userService.register(user).then(() => this.params.closeCallback());
    }
}
