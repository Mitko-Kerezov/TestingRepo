import { Injectable } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { ReplaySubject } from "rxjs";
import { distinctUntilChanged, filter } from "rxjs/operators";
import { RouterExtensions } from "nativescript-angular/router";
import { Kinvey } from "kinvey-nativescript-sdk";

import { BackendService } from "./backend.service";
import { User } from "../models/user.model";
import { NavigationService } from "./navigation.service";

@Injectable()
export class UserService {
    private onLoggedInChangedSubject: ReplaySubject<boolean>;
    private lastRoute: string = "";

    isLoggedIn: Promise<boolean>;

    private get isLoggedInStatus() {
        return !!this.backendService.getActiveUser();
    }

    get onLoggedInChanged() {
        return this.onLoggedInChangedSubject
            .asObservable()
            .pipe(distinctUntilChanged());
    }

    constructor(private backendService: BackendService,
        private navigationService: NavigationService,
        private routerExtensions: RouterExtensions) {
        this.onLoggedInChangedSubject = new ReplaySubject(1);
        this.backendService.setLoggedInChangedObservable(this.onLoggedInChanged);

        this.updateIsLoggedInPromise();
        this.resetHistoryAfterLogin();
    }

    register(user: User) {
        const registerPromise = this.logout()
            .then(() => this.backendService.signup(user.username, user.password));

        registerPromise.catch(this.handleErrors)
        this.updateIsLoggedInPromise(registerPromise);

        return registerPromise;
    }

    login(user: User) {
        const loginPromise = this.logout()
            .then(() => this.backendService.login(user.username, user.password));

        loginPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(loginPromise);

        return loginPromise;
    }

    loginWithMIC(redirectUri: string, authorizationGrant?: Kinvey.AuthorizationGrant, options?: Kinvey.RequestOptions) {
        const loginPromise = this.logout()
            .then(() => this.backendService.loginWithMIC(redirectUri, authorizationGrant, options));

        loginPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(loginPromise);

        return loginPromise;
    }

    logout(): Promise<void> {
        const logoutPromise = this.backendService.logout();
        this.updateIsLoggedInPromise(logoutPromise);

        return logoutPromise;
    }

    resetPassword(email) {
        const resetPasswordPromise = this.backendService.resetPassword(email);

        resetPasswordPromise.catch(this.handleErrors);

        return resetPasswordPromise;
    }

    handleErrors(error) {
        console.log(error.toString());
    }

    private updateIsLoggedInPromise(pendingPromise?: Promise<any>) {
        if (!pendingPromise) {
            this.isLoggedIn = Promise.resolve(this.isLoggedInStatus);
            this.onLoggedInChangedSubject.next(this.isLoggedInStatus);
            return;
        }

        this.isLoggedIn = pendingPromise
            .catch()
            .then(() => {
                this.onLoggedInChangedSubject.next(this.isLoggedInStatus);
                return this.isLoggedInStatus;
            });
    }

    private resetHistoryAfterLogin() {
        this.routerExtensions.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                if (this.lastRoute.startsWith("/login/login")) {
                    this.navigationService.navigate([""], { clearHistory: true });
                }

                this.lastRoute = this.routerExtensions.router.url;
            });
    }
}
