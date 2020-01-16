import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FightGameComponent } from './fight-game/fight-game.component';
import { HomeComponent } from './home/home.component';
import { MathGameComponent } from './math-game/math-game.component';
import { NavComponent } from './nav/nav.component';
import { RaceGameComponent } from './race-game/race-game.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FightGameComponent,
    HomeComponent,
    MathGameComponent,
    NavComponent,
    RaceGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
