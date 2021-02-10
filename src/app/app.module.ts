import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ProfileComponent } from "./profile/profile.component";
import { ListComponent } from "./list/list.component";
import { ContactComponent } from "./contact/contact.component";
import { ContactService } from "./contact/contact.service";
import { SearchComponent } from "./search/search.component";
import { MaterialModule } from "../material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule, routes } from "./app.routing.module";
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ProfileComponent,
    ListComponent,
    ContactComponent,
    SearchComponent,
    AboutComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [ContactService]
})
export class AppModule {}
