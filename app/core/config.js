"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logged_in_lazy_load_guard_1 = require("./guards/logged-in-lazy-load.guard");
exports.config = {
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
                canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard]
            },
            {
                path: "initial",
                outlet: "initialTab",
                loadChildren: "./initial/initial.module#InitialModule",
                canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0ZBQTJFO0FBRWhFLFFBQUEsTUFBTSxHQUFHO0lBQ25CLGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7SUFDeEMsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLHlEQUF5RDtnQkFDckUsU0FBUyxFQUFFLE1BQU07YUFDcEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsS0FBSztnQkFDWCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsWUFBWSxFQUFFLDRCQUE0QjtnQkFDMUMsT0FBTyxFQUFFLENBQUMsaURBQXFCLENBQUM7YUFDbkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsWUFBWSxFQUFFLHdDQUF3QztnQkFDdEQsT0FBTyxFQUFFLENBQUMsaURBQXFCLENBQUM7YUFDbkM7U0FDSjtRQUNELE1BQU0sRUFBRTtZQUNKO2dCQUNJLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxRQUFRO2dCQUNmLFlBQVksRUFBRSx1Q0FBdUM7YUFDeEQ7WUFDRDtnQkFDSSxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsSUFBSTtnQkFDWCxZQUFZLEVBQUUseUJBQXlCO2FBQzFDO1NBQ0o7S0FDSjtDQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IExvZ2dlZEluTGF6eUxvYWRHdWFyZCB9IGZyb20gXCIuL2d1YXJkcy9sb2dnZWQtaW4tbGF6eS1sb2FkLmd1YXJkXCI7XG5cbmV4cG9ydCB2YXIgY29uZmlnID0ge1xuXHRiYWNrZW5kQ29uZmlnOiB7IGluc3RhbmNlSWQ6IFwic3RnLXVzMVwiIH0sXG5cdHJvdXRlczoge1xuXHQgICAgdGFiczogW1xuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgcGF0aDogXCJcIixcblx0ICAgICAgICAgICAgcmVkaXJlY3RUbzogXCIvKGNtZFRhYjpjbWQvY21kLWxpc3QvL2luaXRpYWxUYWI6aW5pdGlhbC9pbml0aWFsLWxpc3QpXCIsXG5cdCAgICAgICAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgcGF0aDogXCJjbWRcIixcblx0ICAgICAgICAgICAgb3V0bGV0OiBcImNtZFRhYlwiLFxuXHQgICAgICAgICAgICBsb2FkQ2hpbGRyZW46IFwiLi9jbWQvY21kLm1vZHVsZSNDbWRNb2R1bGVcIixcblx0ICAgICAgICAgICAgY2FuTG9hZDogW0xvZ2dlZEluTGF6eUxvYWRHdWFyZF1cblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgcGF0aDogXCJpbml0aWFsXCIsXG5cdCAgICAgICAgICAgIG91dGxldDogXCJpbml0aWFsVGFiXCIsXG5cdCAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCIuL2luaXRpYWwvaW5pdGlhbC5tb2R1bGUjSW5pdGlhbE1vZHVsZVwiLFxuXHQgICAgICAgICAgICBjYW5Mb2FkOiBbTG9nZ2VkSW5MYXp5TG9hZEd1YXJkXVxuXHQgICAgICAgIH1cblx0ICAgIF0sXG5cdCAgICBtb2RhbHM6IFtcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIHBhdGg6IFwiZW0tZm9ybVwiLFxuXHQgICAgICAgICAgICB0aXRsZTogXCJlbUZvcm1cIixcblx0ICAgICAgICAgICAgbG9hZENoaWxkcmVuOiBcIi4vZW0tZm9ybS9lbS1mb3JtLm1vZHVsZSNFbUZvcm1Nb2R1bGVcIlxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICBwYXRoOiBcImZxXCIsXG5cdCAgICAgICAgICAgIHRpdGxlOiBcImZxXCIsXG5cdCAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCIuL2ZxL2ZxLm1vZHVsZSNGcU1vZHVsZVwiXG5cdCAgICAgICAgfVxuXHQgICAgXVxuXHR9XG59O1xuXHRcdCJdfQ==