import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FightRoutingModule } from "./fight-routing.module";
import { FightGameComponent } from "./fight-game.component";
import { SharedModule } from "../shared/shared.module";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";

@NgModule({
  declarations: [FightGameComponent],
  imports: [
    CommonModule,
    FightRoutingModule,
    SharedModule,
    ProgressbarModule.forRoot()
  ]
})
export class FightModule {}
