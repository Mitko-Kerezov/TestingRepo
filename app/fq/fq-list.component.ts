import { Component, OnInit, Injector, ViewChild } from "@angular/core";
const metadata = require("./fq-form.metadata.json");
import { ActivatedRoute } from "@angular/router";
import { BackendService } from "../core/services/backend.service";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Kinvey } from "kinvey-nativescript-sdk";
import { NavigationService } from "../core/services/navigation.service";
import { BackNavigation } from "../shared/directives/back-navigation.directive"

@Component({
    moduleId: module.id,
    templateUrl: "./fq-list.component.html"
})
export class FqListComponent implements OnInit {
    private dataStoreType = Kinvey.DataStoreType.Cache;
    private modalDialogParams: ModalDialogParams;
    public item: any;
    public metadata: any;
    @ViewChild(BackNavigation) backNavigation: BackNavigation;
    @ViewChild("formObject") radDataForm: any;

    constructor(private injector: Injector,
                private navigationService: NavigationService,
                private backendService: BackendService,
                private activatedRoute: ActivatedRoute) {
        try {
        	this.modalDialogParams = this.injector.get(ModalDialogParams)
        } catch { }
    }

    ngOnInit(): void {
        const itemId = this.activatedRoute.snapshot.params.id;
        const foreignKeyName = this.modalDialogParams && this.modalDialogParams.context &&
            this.modalDialogParams.context.params && this.modalDialogParams.context.params.queryParams &&
            this.modalDialogParams.context.params.queryParams.foreignKeyName;

        if (itemId && !foreignKeyName) {
            console.log("Retrieving item from db")
            Kinvey.DataStore.collection("customers").findById(itemId).subscribe(dbItem => {
                console.log("Item retrieved!")
        		this.item = dbItem;
        	});
        } else {
        	this.item = { name: "", salary: 0, loyal: false, added: "", username: "", phone: "" };
        	if (foreignKeyName) {
        		this.item[foreignKeyName] = itemId;
        	}
        }

        this.metadata = metadata;
    }

    submitForm() {
    	this.radDataForm.dataForm.validateAll()
    			.then(result => {
    				if (result) {
                        console.log("about to save", JSON.stringify(this.item))
                        this.backendService.save("customers", this.item)
    						.then(() => {
                                console.log("Saved!")
    							this.backNavigation.goBack();
    						});
    				}
    			});
    }
}
