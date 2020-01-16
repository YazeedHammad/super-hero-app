import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FightGameComponent } from "./fight-game.component";

const routes: Routes = [
  { path: "main", component: FightGameComponent },
  { path: "**", redirectTo: "/fight/main" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FightRoutingModule {}
