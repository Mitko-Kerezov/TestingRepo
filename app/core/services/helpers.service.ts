import { Injectable } from "@angular/core";
import * as frame from "ui/frame/frame";
import * as app from "application/application";

@Injectable()
export class HelpersService {
    addAndroidBackPressedHandler() {
        if (!app.android) {
            return;
        }

        this.removeAndroidBackPressedHandler();
        frame.topmost().on("activityBackPressed", this.onAndroidBackPressed);
    }

    removeAndroidBackPressedHandler() {
        if (!app.android) {
            return;
        }

        frame.topmost().off("activityBackPressed", this.onAndroidBackPressed);
    }

    private onAndroidBackPressed(args: any) {
        args.cancel = true;
        app.android.foregroundActivity.moveTaskToBack(true);
    }
}
