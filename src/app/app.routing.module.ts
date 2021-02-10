import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
  { path: "/", component: AppComponent },
  { path: "/about", component: AboutComponent },
  { path: "**", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: "always",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
