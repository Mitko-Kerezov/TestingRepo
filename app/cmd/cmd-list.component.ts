import { Component, OnInit } from "@angular/core";
import { Observable, Subject, combineLatest } from "rxjs";
import { BackendService } from "../core/services/backend.service";
import { Kinvey } from "kinvey-nativescript-sdk";
import { ActivatedRoute } from "@angular/router";
import { NavigationService } from "../core/services/navigation.service";

@Component({
    moduleId: module.id,
    templateUrl: "./cmd-list.component.html"
})
export class CmdListComponent implements OnInit {
    private dataStoreType = Kinvey.DataStoreType.Cache;
    
    public myItems: Observable<any[]>;
    
    constructor(private backendService: BackendService,
                private navigationService: NavigationService,
                private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.myItems = this.backendService.find("customers", this.dataStoreType);
        console.log("pendingSyncEntities", JSON.stringify(Kinvey.DataStore.collection('customers').pendingSyncEntities()))
        console.log("pendingSyncCount", JSON.stringify(Kinvey.DataStore.collection('customers').pendingSyncCount()))
        Kinvey.DataStore.collection('customers').clearSync();   
    }
    
    public onItemTap(item) {
    	this.navigationService.navigate(
    		["../cmd-details", item._id],
    		{ relativeTo: this.activatedRoute }
    	);
    }
    
    public createTapped() {
        this.navigationService.navigateTo(`../../fq`);
    }
}
