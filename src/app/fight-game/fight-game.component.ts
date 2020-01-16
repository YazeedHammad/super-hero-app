import { Component, OnInit } from "@angular/core";
import { HerosService } from "../shared/heros.service";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

@Component({
  selector: "app-fight-game",
  templateUrl: "./fight-game.component.html",
  styleUrls: ["./fight-game.component.scss"],
  animations: [
    trigger("first", [
      state(
        "start",
        style({
          transform: "translateX(0)"
        })
      ),
      state(
        "end",
        style({
          transform: "translateX(0)"
        })
      ),
      transition(
        "start => end",
        animate(
          "1000ms",
          keyframes([
            style({ transform: "translateX(0)" }),
            style({ transform: "translateX(100%)" }),
            style({ transform: "translateX(0)" })
          ])
        )
      )
    ]),
    trigger("second", [
      state(
        "start2",
        style({
          transform: "translateX(0)"
        })
      ),
      state(
        "end2",
        style({
          transform: "translateX(0)"
        })
      ),
      transition(
        "start2 => end2",
        animate(
          "1000ms",
          keyframes([
            style({ transform: "translateX(0)" }),
            style({ transform: "translateX(-100%)" }),
            style({ transform: "translateX(0)" })
          ])
        )
      )
    ])
  ]
})
export class FightGameComponent implements OnInit {
  public heros: [string, any][] = [];
  public firstFighterName: string;
  public secFighterName: string;
  public firstIndex: number;
  public secIndex: number;
  public state: string = "start";
  public state2: string = "start2";
  public firstFighterHealth: number = 100;
  public secFighterHealth: number = 100;
  public firstFighterBAM: number;
  public secFighterBAM: number;

  constructor(private heroService: HerosService) {}

  ngOnInit(): void {
    this.heroService.getHero().subscribe(
      res => {
        this.heros = Object.entries(res);
      },
      err => {
        // tslint:disable-next-line: no-console
        console.log(err);
      }
    );
  }

  public selectedFirstHero = (event: any): void => {
    this.firstFighterName = event.target.value;
    this.firstIndex = this.heros
      .map(ele => ele[1].name)
      .indexOf(this.firstFighterName);
    if (this.firstIndex === this.secIndex) {
      Swal.fire({
        title: "Oops!",
        text: "Please Choose Different Heroes!",
        imageUrl: this.heros[this.firstIndex][1].images.md,
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image",
        animation: true
      });
    }
    this.firstFighterBAM =
      (this.heros[this.firstIndex][1].powerstats.strength +
        this.heros[this.firstIndex][1].powerstats.power +
        this.heros[this.firstIndex][1].powerstats.durability +
        this.heros[this.firstIndex][1].powerstats.combat) /
        100 +
      10;
    this.onReset();
  };

  public selectedSecHero = (event: any): void => {
    this.secFighterName = event.target.value;
    this.secIndex = this.heros
      .map(ele => ele[1].name)
      .indexOf(this.secFighterName);
    if (this.firstIndex === this.secIndex) {
      Swal.fire({
        title: "Oops!",
        text: "Please Choose Different Heroes!",
        imageUrl: this.heros[this.secIndex][1].images.md,
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image",
        animation: true
      });
    }
    this.onReset();
    this.secFighterBAM =
      (this.heros[this.secIndex][1].powerstats.strength +
        this.heros[this.secIndex][1].powerstats.power +
        this.heros[this.secIndex][1].powerstats.durability +
        this.heros[this.secIndex][1].powerstats.combat) /
        100 +
      10;
  };

  public onFight = () => {
    if (this.firstIndex === this.secIndex) {
      Swal.fire({
        title: "Oops!",
        text: "Please Choose Different Heroes!",
        imageUrl: this.heros[this.firstIndex][1].images.md,
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image",
        animation: true
      });
      return;
    }
    this.state === "start" ? (this.state = "end") : (this.state = "start");
  };

  public onReset = (): void => {
    this.state = "start";
    this.firstFighterHealth = 100;
    this.secFighterHealth = 100;
  };

  public firstDone = (): void => {
    if (this.state !== "start") {
      this.state = "start";
      this.secFighterHealth = this.secFighterHealth - this.secFighterBAM;

      if (this.secFighterHealth <= 0) {
        this.secFighterHealth = 0;
        this.onReset();
      } else {
        this.state2 === "start2"
          ? (this.state2 = "end2")
          : (this.state2 = "start2");
      }
    }
  };

  public secDone = (): void => {
    if (this.state2 !== "start2") {
      this.state2 = "start2";
      this.firstFighterHealth = this.firstFighterHealth - this.firstFighterBAM;
      if (this.firstFighterHealth <= 0) {
        this.firstFighterHealth = 0;
        this.onReset();
      } else {
        this.onFight();
      }
    }
  };
}
