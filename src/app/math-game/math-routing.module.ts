import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MathGameComponent } from "./math-game.component";

const routes: Routes = [
  { path: "main", component: MathGameComponent },
  { path: "**", redirectTo: "/math/main" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule {}
