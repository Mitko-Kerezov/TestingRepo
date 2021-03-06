import { Component } from "@angular/core";
import * as platform from "platform";

@Component({
    selector: "tabs",
    moduleId: module.id,
    templateUrl: "./tabs.component.html"
})
export class TabsComponent {
    onTabViewLoaded({ object: tabView }) {
        if (platform.isAndroid) {
            return;
        }

        tabView.eachChild((child) => {
            const tabBarItem = child.__controller.tabBarItem;
            tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -11 };
        });
    }
}