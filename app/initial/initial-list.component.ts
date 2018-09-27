import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "../core/services/backend.service";
import { Kinvey } from "kinvey-nativescript-sdk";

@Component({
    moduleId: module.id,
    templateUrl: "./initial-list.component.html"
})
export class InitialListComponent implements OnInit {
    private dataStoreType = Kinvey.DataStoreType.Cache;
    
    public myItems: Observable<any[]>;
    
    constructor(private backendService: BackendService) {
    }
    
    ngOnInit(): void {
        // Uncomment the following line if you want to retrieve all items from the "emptyCollection" collection
        // this.myItems = this.backendService.find("emptyCollection", this.dataStoreType);
    }
}
