import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RaceRoutingModule } from "./race-routing.module";
import { RaceGameComponent } from "./race-game.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [RaceGameComponent],
  imports: [CommonModule, RaceRoutingModule, SharedModule]
})
export class RaceModule {}
