import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MathRoutingModule } from "./math-routing.module";
import { MathGameComponent } from "./math-game.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MathGameComponent],
  imports: [CommonModule, MathRoutingModule, SharedModule]
})
export class MathModule {}
