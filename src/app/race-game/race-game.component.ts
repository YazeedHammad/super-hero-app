import { Component, OnInit } from "@angular/core";
import { HerosService } from "../shared/heros.service";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const SCREEN_WIDTH = window.innerWidth;
@Component({
  selector: "app-race-game",
  templateUrl: "./race-game.component.html",
  styleUrls: ["./race-game.component.scss"],
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
          transform: "translateX(" + (SCREEN_WIDTH - 400) + "px)"
        })
      ),
      transition("start => end", animate("{{time}}ms"), {
        params: { time: "1000" }
      })
    ]),

    trigger("second", [
      state(
        "start",
        style({
          transform: "translateX(0)"
        })
      ),
      state(
        "end",
        style({
          transform: "translateX(" + (SCREEN_WIDTH - 400) + "px)"
        })
      ),
      transition("start => end", animate("{{time}}ms"), {
        params: { time: "1000" }
      })
    ])
  ]
})
export class RaceGameComponent implements OnInit {
  public heros: [string, any][] = [];
  public heroImg: string;
  public racetrackWidth: number;
  public firstRacerTime: number;
  public secRacerTime: number;
  // tslint:disable-next-line: typedef
  public isComplete = false;
  public place: string;
  public firstRacerName: string;
  public secRacerName: string;
  public firstIndex: number;
  public secIndex: number;
  // tslint:disable-next-line: no-inferrable-types
  public state: string = "start";

  constructor(private heroService: HerosService) {}

  ngOnInit(): void {
    this.heroService.getHero().subscribe(
      res => {
        this.heros = Object.entries(res);
        console.log(this.heros);
      },
      err => {
        console.log(err);
      }
    );
  }

  selectedFirstHero = (event: any) => {
    this.firstRacerName = event.target.value;
    this.firstIndex = this.heros
      .map(ele => ele[1].name)
      .indexOf(this.firstRacerName);
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
    this.onReset();
  };

  selectedSecHero = (event: any) => {
    this.secRacerName = event.target.value;
    this.secIndex = this.heros
      .map(ele => ele[1].name)
      .indexOf(this.secRacerName);
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
  };

  onRace = () => {
    this.firstRacerTime =
      3500 - this.heros[this.firstIndex][1].powerstats.speed * 10;
    this.secRacerTime =
      3500 - this.heros[this.secIndex][1].powerstats.speed * 10;
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
    this.isComplete = false;
    this.place = "first";
    this.state === "start" ? (this.state = "end") : (this.state = "start");
  };

  firstRacer = () => {
    if (this.state === "end") {
      this.checkIfComplete();
    }
  };

  secRacer = () => {
    if (this.state === "end") {
      this.checkIfComplete();
    }
  };

  checkIfComplete = () => {
    if (this.isComplete === false) {
      this.isComplete = true;
    } else {
      this.place = "second";
    }
  };

  onReset = () => {
    this.state = "start";
  };
}
