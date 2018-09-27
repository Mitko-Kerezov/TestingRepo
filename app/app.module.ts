import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module"
import { CoreModule } from "./core/core.module"

import { AppComponent } from "./app.component";
import { SideDrawerItemsComponent } from "./core/navigation/side-drawer-items.component"
import { TabsComponent } from "./core/navigation/tabs.component"
import { ModalComponent } from "./core/navigation/modal.component";

@NgModule({
    bootstrap: [AppComponent],
    entryComponents: [
        ModalComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CoreModule,
        CoreModule.forRoot()
    ],
    declarations: [
        AppComponent,

        SideDrawerItemsComponent,
        TabsComponent,
        ModalComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
