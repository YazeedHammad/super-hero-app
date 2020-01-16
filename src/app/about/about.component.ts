import { Component, OnInit } from "@angular/core";
import { HerosService } from "../shared/heros.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  public heros: [string, any][] = [];

  constructor(private heroService: HerosService) {}

  ngOnInit(): void {
    this.heroService.getHero().subscribe(
      res => {
        this.heros = Object.entries(res);
        // this.heros = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
