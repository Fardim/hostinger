import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home" }
];
