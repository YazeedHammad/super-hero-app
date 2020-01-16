import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    InfiniteScrollModule,
    SharedModule,
    ProgressbarModule.forRoot()
  ]
})
export class AboutModule {}
