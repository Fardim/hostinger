import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { TeileService } from "./_service/teile.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { TeileDetailsComponent } from "./teile-details/teile-details.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from "./spinner/spinner.component";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    TeileDetailsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatProgressSpinnerModule,
    PaginationModule.forRoot()
  ],
  providers: [TeileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
