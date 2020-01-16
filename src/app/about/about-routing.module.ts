import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";

const routes: Routes = [
  { path: "main", component: AboutComponent },
  { path: "**", redirectTo: "/about/main" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
