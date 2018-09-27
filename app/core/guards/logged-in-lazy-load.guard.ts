import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable()
export class LoggedInLazyLoadGuard implements CanLoad {
    constructor(private userService: UserService) {
    }

    canLoad(): Promise<boolean> {
        return this.userService.isLoggedIn;
    }
}