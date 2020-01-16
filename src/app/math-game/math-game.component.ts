import { Component, OnInit } from "@angular/core";
import { HerosService } from "../shared/heros.service";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

interface IQuestions {
  question: string;
  answer: number;
  randomAnswer?: number;
}

@Component({
  selector: "app-math-game",
  templateUrl: "./math-game.component.html",
  styleUrls: ["./math-game.component.scss"]
})
export class MathGameComponent implements OnInit {
  private firstCompetitorName: string;
  private secCompetitorName: string;
  private firstHeroIntelligence: number;
  private secHeroIntelligence: number;
  private firstInterval: any;
  private secInterval: any;

  public isSelected: boolean = false;
  public randomNumber: number;
  public firstIndex: number;
  public secIndex: number;
  public questionsFirst: IQuestions[];
  public questionsSecond: IQuestions[];
  public firstCounter: number = -1;
  public secondCounter: number = -1;
  public heros: [string, any][] = [];
  public rnd: number;

  constructor(private heroService: HerosService) {
    setInterval(() => {
      this.randomNumber = this.getRandomInt(0, 1000);
    }, 300);
  }

  ngOnInit(): void {
    this.heroService.getHero().subscribe(
      res => {
        this.heros = Object.entries(res);
      },
      err => {
        // console.log(err);
      }
    );

    this.questionsFirst = [
      this.rndQuestion(),
      this.rndQuestion(),
      this.rndQuestion(),
      this.rndQuestion(),
      this.rndQuestion()
    ];
    this.questionsSecond = [];
    for (let i = 0; i < this.questionsFirst.length; i++) {
      const e = this.questionsFirst[i];
      this.questionsSecond.push(JSON.parse(JSON.stringify(e)));
    }
  }

  private rndQuestion = (): any => {
    const a = this.getRandomInt(0, 100);
    const b = this.getRandomInt(0, 100);
    const operator = "+-*"[this.getRandomInt(0, 3)];
    const answer =
      operator === "+"
        ? a + b
        : operator === "-"
        ? a - b
        : operator === "*"
        ? a * b
        : 0;
    return {
      question: "what is " + a + " " + operator + " " + b,
      answer
    };
  };

  private getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  private startSolving(): void {
    this.firstInterval = setInterval(() => {
      this.firstCounter++;
      if (this.firstCounter > 4) {
        clearInterval(this.firstInterval);
      }
    }, (100 / this.firstHeroIntelligence) * 1500);

    this.secInterval = setInterval(() => {
      this.secondCounter++;
      if (this.secondCounter > 4) {
        clearInterval(this.secInterval);
      }
    }, (100 / this.secHeroIntelligence) * 1500);
  }

  public selectedHero = (event: any, order: number): void => {
    this.isSelected = true;
    if (order === 1) {
      this.firstCompetitorName = event.target.value;
      this.firstIndex = this.heros
        .map(ele => ele[1].name)
        .indexOf(this.firstCompetitorName);
      this.firstHeroIntelligence = this.heros[
        this.firstIndex
      ][1].powerstats.intelligence;
    } else {
      this.secCompetitorName = event.target.value;
      this.secIndex = this.heros
        .map(ele => ele[1].name)
        .indexOf(this.secCompetitorName);
      this.secHeroIntelligence = this.heros[
        this.secIndex
      ][1].powerstats.intelligence;
    }
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
  };

  public onStart = (): void => {
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
    this.startSolving();
  };

  public onReset = (): void => {
    this.isSelected = false;
    this.firstCounter = -1;
    this.secondCounter = -1;
    clearInterval(this.firstInterval);
    clearInterval(this.secInterval);
  };
}
