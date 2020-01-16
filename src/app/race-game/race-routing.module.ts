import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RaceGameComponent } from "./race-game.component";

const routes: Routes = [
  { path: "main", component: RaceGameComponent },
  { path: "**", redirectTo: "/race/main" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceRoutingModule {}
