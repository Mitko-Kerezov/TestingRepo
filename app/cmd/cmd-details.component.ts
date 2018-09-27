import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { BackendService } from "../core/services/backend.service";
import { Kinvey } from "kinvey-nativescript-sdk";
import { NavigationService } from "../core/services/navigation.service";

@Component({
    moduleId: module.id,
    templateUrl: "./cmd-details.component.html"
})
export class CmdDetailsComponent implements OnInit {
    private dataStoreType = Kinvey.DataStoreType.Cache;
    
    public item: Observable<any>;
    
    constructor(private navigationService: NavigationService,
                private backendService: BackendService,
                private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.item = this.backendService.findById("customers", this.activatedRoute.snapshot.params.id, this.dataStoreType);
    }
    
    public editTapped(itemId: string) {
        this.navigationService.navigateTo(`../../fq/${itemId}`);
    }
    
    public placeTapped(itemId: string) {
        this.navigationService.navigateTo(`../../em-form/${itemId}`, {
            queryParams: {
                foreignKeyName: "cust_id",
            }
        });
    }
}
