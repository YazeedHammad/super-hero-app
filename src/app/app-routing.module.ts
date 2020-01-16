import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "fight", loadChildren: "./fight-game/fight.module#FightModule" },
  { path: "math", loadChildren: "./math-game/math.module#MathModule" },
  { path: "race", loadChildren: "./race-game/race.module#RaceModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
