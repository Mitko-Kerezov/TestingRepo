
import { LoggedInLazyLoadGuard } from "./guards/logged-in-lazy-load.guard";

export var config = {
	backendConfig: { instanceId: "stg-us1" },
	routes: {
	    tabs: [
	        {
	            path: "",
	            redirectTo: "/(cmdTab:cmd/cmd-list//initialTab:initial/initial-list)",
	            pathMatch: "full"
	        },
	        {
	            path: "cmd",
	            outlet: "cmdTab",
	            loadChildren: "./cmd/cmd.module#CmdModule",
	            canLoad: [LoggedInLazyLoadGuard]
	        },
	        {
	            path: "initial",
	            outlet: "initialTab",
	            loadChildren: "./initial/initial.module#InitialModule",
	            canLoad: [LoggedInLazyLoadGuard]
	        }
	    ],
	    modals: [
	        {
	            path: "em-form",
	            title: "emForm",
	            loadChildren: "./em-form/em-form.module#EmFormModule"
	        },
	        {
	            path: "fq",
	            title: "fq",
	            loadChildren: "./fq/fq.module#FqModule"
	        }
	    ]
	}
};
		