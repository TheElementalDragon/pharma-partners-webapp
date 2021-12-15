import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoggedInAuthGuard } from "./core/auth/auth.guard"
import { LoginComponent } from "./core/auth/login/login.component"
import { LayoutComponent } from "./core/layout/layout.component"
import { AboutComponent } from "./pages/about/about.component"
import { CalendarComponent } from "./pages/calendar/calendar.component"
import { HomepageComponent } from "./pages/homepage/homepage.component"
import { PatientListComponent } from "./pages/patient/patient-list/patient-list.component"
import { PatientComponent } from "./pages/patient/patient.component"

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		canActivate: [LoggedInAuthGuard],
		children: 
		[
			{ path: "", pathMatch: "full", redirectTo: "home" },
			{ path: "home", component: HomepageComponent },
			{ path: "about", component: AboutComponent },
			{ path: "calendar", component: CalendarComponent },
			{ path: "patient", component: PatientComponent,
				children: 
				[
					{ path: "patient/list", component: PatientListComponent },
					{ path: "patient/detail", component: PatientListComponent }
				]
			}
		]
	},
	{ path: "login", component: LoginComponent },
	{ path: "**", redirectTo: "/" }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
