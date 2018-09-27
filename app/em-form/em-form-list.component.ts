import { Component, OnInit, Injector, ViewChild } from "@angular/core";
const metadata = require("./em-form-form.metadata.json");
import { ActivatedRoute } from "@angular/router";
import { BackendService } from "../core/services/backend.service";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Kinvey } from "kinvey-nativescript-sdk";
import { NavigationService } from "../core/services/navigation.service";
import { BackNavigation } from "../shared/directives/back-navigation.directive"

@Component({
    moduleId: module.id,
    templateUrl: "./em-form-list.component.html"
})
export class EmFormListComponent implements OnInit {
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
        	this.backendService.findById("emptyCollection", itemId, this.dataStoreType).subscribe(dbItem => {
        		this.item = dbItem;
        	});
        } else {
        	this.item = { Name: "", Type: "", Id: "", Text: "", ['custom;column']: "", ['spacey column']: 0 };
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
    					const itemToSave = this.item;
    					this.item = null;
    					this.backendService.save("emptyCollection", itemToSave)
    						.then(() => {
    							this.backNavigation.goBack();
    						});
    				}
    			});
    }
}
