import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, flatMap, last, catchError, shareReplay } from "rxjs/operators";
import { Kinvey } from "kinvey-nativescript-sdk";
import { config } from "../../core/config";

@Injectable()
export class BackendService {
    private loggedInChangedObservable: Observable<boolean>;
    
    constructor() {
        Kinvey.init(<Kinvey.ClientConfig>config.backendConfig);
    }

    setLoggedInChangedObservable(value: Observable<boolean>) {
        this.loggedInChangedObservable = value;
    }

    login(username: string, password: string) {
        return Kinvey.User.login(username, password);
    }

    loginWithMIC(redirectUri: string, authorizationGrant?: Kinvey.AuthorizationGrant, options?: Kinvey.RequestOptions) {
        return Kinvey.User.loginWithMIC(redirectUri, authorizationGrant, options);
    }

    logout() {
        return Kinvey.User.logout();
    }

    signup(username: string, password: string) {
        return Kinvey.User.signup({ username, password });
    }

    getActiveUser() {
        return Kinvey.User.getActiveUser();
    }

    resetPassword(email: string, options?: Kinvey.RequestOptions) {
        return Kinvey.User.resetPassword(email, options);
    }

    save(collectionName: string, item: any, dataStoreType?: Kinvey.DataStoreType, options?: Kinvey.RequestOptions) {
        return Kinvey.DataStore.collection(collectionName, dataStoreType).save(item, options);
    }

    find(collectionName: string, dataStoreType?: Kinvey.DataStoreType, query?: Kinvey.Query, options?: Kinvey.RequestOptions) {
        const observableResult = Kinvey.DataStore.collection(collectionName, dataStoreType).find(query, options);
        return this.updateOnLoggedInChanged(observableResult);
    }

    findById(collectionName: string, id: string, dataStoreType?: Kinvey.DataStoreType, options?: Kinvey.RequestOptions) {
        const observableResult = Kinvey.DataStore.collection(collectionName, dataStoreType).findById(id, options);
        return this.updateOnLoggedInChanged(observableResult);
    }

    private updateOnLoggedInChanged(observable: Observable<any>) {
        return this.loggedInChangedObservable.pipe(
            flatMap((isLoggedIn) => isLoggedIn ? this.cacheLast(observable) : of(null)),
        );
    }

    private cacheLast(observable: Observable<any>) {
        return observable.pipe(
            catchError(e => {
                console.error(e.toString());
                return of(null);
            }),
            last(value => !!value),
            shareReplay(1)
        );
    }
}
